import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import rateLimit from 'express-rate-limit';
import crypto from 'crypto';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

// Environment configuration
const isDevelopment = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;

// Database configuration
const mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/spaceAPI';
const jwtSecret = process.env.JWT_SECRET || crypto.randomBytes(64).toString('hex');

// Rate limiting for password-related endpoints
const passwordLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // limit each IP to 5 requests per windowMs
	message: { success: false, message: 'Too many password attempts, please try again later.' }
});

// MongoDB connection options based on environment
const mongooseOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	dbName: 'spaceAPI',
	// Only use these options when connecting to Atlas/remote MongoDB
	...(process.env.MONGO_URL && process.env.NODE_ENV === 'production' ? {
		retryWrites: true,
		w: 'majority',
		ssl: true
	} : {})
};

// Allowed origins based on environment
const defaultOrigins = [
	'http://localhost:3000',
	'http://localhost:3001',
	'https://citizenship25.netlify.app',
	'https://citizenship-wm42.onrender.com'
];

const allowedOrigins = process.env.ALLOWED_ORIGINS 
	? process.env.ALLOWED_ORIGINS.split(',')
	: defaultOrigins;

console.log('Server starting with configuration:', {
	environment: isDevelopment ? 'development' : 'production',
	port,
	allowedOrigins,
	mongoDbUrl: mongoUrl.replace(/\/\/[^:]+:[^@]+@/, '//<credentials>@')
});

mongoose.connect(mongoUrl, mongooseOptions)
	.then(() => {
		console.log('Connected to MongoDB successfully');
		console.log('Database:', mongoose.connection.db.databaseName);
		console.log('Environment:', process.env.NODE_ENV || 'development');
	})
	.catch((error) => {
		console.error('Failed to connect to MongoDB:', error);
	});

mongoose.connection.on('error', (error) => {
	console.error('MongoDB connection error:', error);
});

mongoose.Promise = Promise;

const Citizen = mongoose.model('Citizen', {
	username: {
		type: String,
		required: [true, 'Username Required'],
		unique: [true, 'Username is already taken'],
		maxlength: [10, 'Your username can be max 15 characters'],
	},
	email: {
		type: String,
		required: [true, 'Email required'],
		unique: [true, 'This email is already registrated'],
		trim: true,
		validate: {
			validator: (value) => {
				return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
			},
			message: 'Please, enter a valid email',
		},
	},
	password: {
		type: String,
		required: [true, 'Password required'],
	},
	accessToken: {
		type: String,
		default: () => crypto.randomBytes(128).toString('hex'),
	},
	badges: {
		type: Number,
		default: 5,
	},
	ranking: {
		type: Number,
		default: 1,
	},
	coins: {
		type: Number,
		default: 10,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	avatar: {
		type: String,
		default: 'man',
	},
	items: {
		type: Array,
	},
	investments: {
		type: Number,
		default: 0,
	},
	investmentQuantity: {
		type: Number,
		default: 0,
	},
	energy: {
		type: Number,
		default: 2000,
	},
	highscoreSpaceball: {
		type: Number,
		default: 0,
	},
	highscoreFish: {
		type: Number,
		default: 0,
	},
	highscoreMath: {
		type: Number,
		default: 0,
	},
});

const CitizenMessage = mongoose.model('CitizenMessage', {
	message: String,
	createdAt: {
		type: Date,
		default: Date.now,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Citizen',
	},
});

// Create HTTP server
const app = express();
const httpServer = createServer(app);

// Socket.io setup with dynamic origins
const io = new Server(httpServer, {
	cors: {
		origin: allowedOrigins,
		methods: ['GET', 'POST'],
		credentials: true
	}
});

// Socket.io connection handling
io.on('connection', (socket) => {
	console.log('Client connected:', socket.id);

	socket.on('disconnect', () => {
		console.log('Client disconnected:', socket.id);
	});
});

// Enhanced authorization middleware with JWT
const authenticateCitizen = async (req, res, next) => {
	try {
		const token = req.header('Authorization')?.replace('Bearer ', '');
		if (!token) {
			return res.status(401).json({ success: false, message: 'No token provided' });
		}

		const decoded = jwt.verify(token, jwtSecret);
		const citizen = await Citizen.findOne({ 
			_id: decoded._id,
			accessToken: token 
		});

		if (!citizen) {
			throw new Error();
		}

		req.citizen = citizen;
		req.token = token;
		next();
	} catch (error) {
		res.status(401).json({ success: false, message: 'Not authorized' });
	}
};

// CORS configuration
app.use(cors({
	origin: allowedOrigins,
	methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'Authorization'],
	credentials: true,
	exposedHeaders: ['Access-Control-Allow-Origin']
}));
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello world');
});

// GET all citizens
app.get('/citizens', async (req, res) => {
	const { sort } = req.query;
	const sortCitizens = (sort) => {
		if (sort === 'mostBadges') {
			return { badges: -1 };
		} else if (sort === 'senior') {
			return { createdAt: 1 };
		} else if (sort === 'junior') {
			return { createdAt: -1 };
		} else if (sort === 'richest') {
			return { coins: -1 };
		} else if (sort === 'highscoreSpaceball') {
			return { highscoreSpaceball: -1 };
		} else if (sort === 'highscoreFish') {
			return { highscoreFish: -1 };
		} else if (sort === 'highscoreMath') {
			return { highscoreMath: -1 };
		} else {
			return { ranking: -1 };
		}
	};

	const allCitizens = await Citizen.find().sort(sortCitizens(sort)).exec();

	try {
		return res.json({ allCitizens });
	} catch (error) {
		res.status(400).json({ message: 'Someting went wrong', error });
	}
});

// GET one citizen
app.get('/citizen/:username', async (req,res) => {
	const { username } = req.params;
	try {
		const citizenProfile = await Citizen.findOne({ username }).exec();
		
		if (!citizenProfile) {
			return res.status(404).json({
				success: false,
				message: `Citizen ${username} not found`
			});
		}

		res.json({
			success: true,
			...sanitizeCitizen(citizenProfile)
		});
	} catch (error) {
		res.status(400).json({ 
			success: false,
			message: 'Something went wrong while fetching citizen profile',
			error: error.message 
		});
	}
});

//update password when you remember your old password
app.patch('/citizen/:id/password', authenticateCitizen, passwordLimiter, async (req, res) => {
	const { _id } = req.citizen;
	const { password, newPassword } = req.body;

	try {
		if (!req.citizen || !bcrypt.compareSync(password, req.citizen.password)) {
			return res.status(401).json({ success: false, message: 'Current password is incorrect' });
		}

		// Validate new password
		if (!newPassword || newPassword.length < 8) {
			return res.status(400).json({ success: false, message: 'New password must be at least 8 characters long' });
		}

		const salt = bcrypt.genSaltSync(12);
		await Citizen.findByIdAndUpdate(_id, {
			password: bcrypt.hashSync(newPassword, salt),
		});

		res.json({ success: true, message: 'Password updated successfully' });
	} catch (error) {
		res.status(400).json({ success: false, message: 'Could not update password', error: error.message });
	}
});

// POST for signing up
app.post('/signup', async (req, res) => {
	const { username, email, password, avatar } = req.body;
	
	try {
		// Log minimal info for debugging - NEVER log passwords
		console.log('Signup attempt:', { username, email, avatar });

		// Validate password requirements
		if (!password || password.length < 8) {
			return res.status(400).json({
				success: false,
				message: 'Password must be at least 8 characters long'
			});
		}

		// Generate salt and hash password
		const salt = await bcrypt.genSalt(12);
		const hashedPassword = await bcrypt.hash(password, salt);

		// Create new citizen with hashed password
		const newCitizen = await new Citizen({
			username,
			email,
			password: hashedPassword,
			avatar
		}).save();

		// Generate JWT token
		const token = jwt.sign({ userId: newCitizen._id }, jwtSecret, { expiresIn: '7d' });

		// Return sanitized response (explicitly exclude sensitive data)
		const sanitizedResponse = {
			success: true,
			userId: newCitizen._id,
			username: newCitizen.username,
			email: newCitizen.email,
			avatar: newCitizen.avatar,
			badges: newCitizen.badges,
			ranking: newCitizen.ranking,
			coins: newCitizen.coins,
			createdAt: newCitizen.createdAt,
			items: newCitizen.items,
			investments: newCitizen.investments,
			investmentQuantity: newCitizen.investmentQuantity,
			energy: newCitizen.energy,
			highscoreSpaceball: newCitizen.highscoreSpaceball,
			highscoreFish: newCitizen.highscoreFish,
			highscoreMath: newCitizen.highscoreMath,
			accessToken: token
		};

		res.status(201).json(sanitizedResponse);
	} catch (error) {
		console.error('Signup error:', {
			name: error.name,
			code: error.code,
			message: error.message,
			keyPattern: error.keyPattern
		});

		if (error.code === 11000) {
			const field = Object.keys(error.keyPattern)[0];
			return res.status(409).json({
				success: false,
				message: `This ${field} is already taken`
			});
		}

		res.status(400).json({
			success: false,
			message: 'Failed to create account'
		});
	}
});

// POST for signing in
app.post('/signin', passwordLimiter, async (req, res) => {
	const { username, password } = req.body;

	try {
		const citizen = await Citizen.findOne({ username });
		
		if (!citizen) {
			return res.status(401).json({
				success: false,
				message: 'Invalid username or password'
			});
		}

		const isValidPassword = await bcrypt.compare(password, citizen.password);
		
		if (!isValidPassword) {
			return res.status(401).json({
				success: false,
				message: 'Invalid username or password'
			});
		}

		// Generate JWT token
		const token = jwt.sign({ userId: citizen._id }, jwtSecret, { expiresIn: '7d' });

		// Return sanitized response (explicitly exclude sensitive data)
		const sanitizedResponse = {
			success: true,
			userId: citizen._id,
			username: citizen.username,
			email: citizen.email,
			avatar: citizen.avatar,
			badges: citizen.badges,
			ranking: citizen.ranking,
			coins: citizen.coins,
			createdAt: citizen.createdAt,
			items: citizen.items,
			investments: citizen.investments,
			investmentQuantity: citizen.investmentQuantity,
			energy: citizen.energy,
			highscoreSpaceball: citizen.highscoreSpaceball,
			highscoreFish: citizen.highscoreFish,
			highscoreMath: citizen.highscoreMath,
			accessToken: token
		};

		res.json(sanitizedResponse);
	} catch (error) {
		console.error('Signin error:', error.message);
		res.status(500).json({
			success: false,
			message: 'Internal server error'
		});
	}
});

// GET Messages for messageboard
app.get('/citizenmessage', async (req, res) => {
	const citizenMessage = await CitizenMessage.find()
		.sort({ createdAt: -1 })
		.populate('user', 'username avatar');
	res.json({ success: true, citizenMessage });
});

// POST message on messageboard
app.post('/citizenmessage/:userid', authenticateCitizen);
app.post('/citizenmessage/:userid', async (req, res) => {
	const { message } = req.body;
	const { userid } = req.params;

	try {
		const user = await Citizen.findById(userid);
		const newCitizenMessage = await new CitizenMessage({ message, user }).save();
		res.json({ success: true, newCitizenMessage });
	} catch (error) {
		res.status(400).json({ success: false, message: 'Invalid request', error });
	}
});

// PATCH for updating avatar
app.patch('/citizen/:id/avatar', authenticateCitizen);
app.patch('/citizen/:id/avatar', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedAvatar = await Citizen.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		if (updatedAvatar) {
			res.json(updatedAvatar);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

// PATCH for increasing badges
app.patch('/citizen/:id/badges', authenticateCitizen);
app.patch('/citizen/:id/badges', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedBadges = await Citizen.findByIdAndUpdate(
			id,
			{
				$inc: {
					badges: req.body.badges,
				},
			},
			{ new: true }
		);
		if (updatedBadges) {
			res.json(updatedBadges);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

// PATCH for increasing ranking
app.patch('/citizen/:id/ranking', authenticateCitizen);
app.patch('/citizen/:id/ranking', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedRanking = await Citizen.findByIdAndUpdate(
			id,
			{
				$inc: {
					ranking: req.body.ranking,
				},
			},
			{ new: true }
		);
		if (updatedRanking) {
			res.json(updatedRanking);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

// PATCH for increasing coins
app.patch('/citizen/:id/coins', authenticateCitizen);
app.patch('/citizen/:id/coins', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedCoins = await Citizen.findByIdAndUpdate(
			id,
			{
				$inc: {
					coins: req.body.coins,
				},
			},
			{ new: true }
		);
		if (updatedCoins) {
			res.json(updatedCoins);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

// PATCH for adding items from shop
app.post('/citizen/:id/items', authenticateCitizen);
app.post('/citizen/:id/items', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedItems = await Citizen.findByIdAndUpdate(
			id,
			{
				$addToSet: { items: req.body.items },
			},
			{ new: true }
		);
		if (updatedItems) {
			res.json(updatedItems);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

// PATCH for updating investments
app.patch('/citizen/:id/investments', authenticateCitizen);
app.patch('/citizen/:id/investments', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedInvestments = await Citizen.findByIdAndUpdate(
			id,
			{
				$inc: {
					investments: req.body.investments,
					investmentQuantity: req.body.investmentQuantity,
				},
			},
			{ new: true }
		);
		if (updatedInvestments) {
			res.json(updatedInvestments);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

// PATCH for increasing caloryintake
app.patch('/citizen/:id/energy', authenticateCitizen);
app.patch('/citizen/:id/energy', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedEnergy = await Citizen.findByIdAndUpdate(
			id,
			{
				$inc: {
					energy: req.body.energy,
				},
			},
			{ new: true }
		);
		if (updatedEnergy) {
			res.json(updatedEnergy);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

// PATCH for updating highscore spaceball
app.patch('/citizen/:id/highscoreSpaceball', authenticateCitizen);
app.patch('/citizen/:id/highscoreSpaceball', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedHighscoreSpaceball = await Citizen.findByIdAndUpdate(
			id,
			req.body,
			{ new: true }
		);
		if (updatedHighscoreSpaceball) {
			res.json(updatedHighscoreSpaceball);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

// PATCH for updating highscore fish farm
app.patch('/citizen/:id/highscoreFish', authenticateCitizen);
app.patch('/citizen/:id/highscoreFish', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedHighscoreFish = await Citizen.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		if (updatedHighscoreFish) {
			res.json(updatedHighscoreFish);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

// PATCH for updating highscore math
app.patch('/citizen/:id/highscoreMath', authenticateCitizen);
app.patch('/citizen/:id/highscoreMath', async (req, res) => {
	const { id } = req.params;
	try {
		const updatedHighscoreMath = await Citizen.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		if (updatedHighscoreMath) {
			res.json(updatedHighscoreMath);
		} else {
			res.status(404).json({ message: 'Not found!' });
		}
	} catch (error) {
		res.status(400).json({ message: 'Invalid request', error });
	}
});

// Helper function to sanitize citizen data
const sanitizeCitizen = (citizen) => {
	if (!citizen) return null;
	const sanitized = citizen.toObject ? citizen.toObject() : { ...citizen };
	// Never send password hash in response
	delete sanitized.password;
	return sanitized;
};

// Start the server
httpServer.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
	console.log('Environment:', process.env.NODE_ENV || 'development');
});
