import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { ThemeButtons } from '../components/theme/ThemeButtons';
import { Avatars } from '../components/signinupform/Avatars';
import { API_URL } from '../utils/utils';
import { profile } from '../reducers/profile';
import { ui } from '../reducers/ui';
import { TextInput } from '../components/signinupform/TextInput';
import { SubmitButton } from '../components/signinupform/SubmitButton';
import { ChangeLogIn } from '../components/signinupform/ChangeLogIn';
import { Loader } from '../components/loader/Loader';
import {
	MainContainer,
	Title,
	Form,
	ErrorMessageSignUp,
	EyeButtonSignUp,
	ChooseText,
	AvatarContainer,
	InputWrapper
} from '../components/signinupform/Styling';
import { PasswordStrength } from '../components/signinupform/PasswordStrength';

export const SignUp = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [avatar, setAvatar] = useState('man');
	const [errorMessage, setErrorMessage] = useState('');
	const [showPassword, setShowPassword] = useState(true);
	const accessToken = useSelector((store) => store.profile.accessToken);
	const loading = useSelector((store) => store.ui.isLoading);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const avatars = ['woman', 'man2', 'hacker', 'woman3', 'woman2', 'man'];

	useEffect(() => {
		if (accessToken) {
			navigate('/');
		}
	}, [accessToken, navigate]);

	const validatePassword = (password) => {
		const requirements = [
			password.length >= 8,
			/[A-Z]/.test(password),
			/[a-z]/.test(password),
			/\d/.test(password),
			/[!@#$%^&*(),.?":{}|<>]/.test(password)
		];
		return requirements.every(req => req);
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		if (!validatePassword(password)) {
			setErrorMessage('Please meet all password requirements');
			return;
		}

		dispatch(ui.actions.setLoading(true));

		try {
			const options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, email, password, avatar })
			};

			const response = await fetch(API_URL('signup'), options);
			const data = await response.json();

			if (data.success) {
				batch(() => {
					dispatch(profile.actions.setUsername(data.username));
					dispatch(profile.actions.setUserId(data.userId));
					dispatch(profile.actions.setAccessToken(data.accessToken));
					dispatch(profile.actions.setItems(data.items));
					dispatch(profile.actions.setAvatar(data.avatar));
					dispatch(profile.actions.setBadges(data.badges));
					dispatch(profile.actions.setRanking(data.ranking));
					dispatch(profile.actions.setCoins(data.coins));
					dispatch(profile.actions.setEnergy(data.energy));
					dispatch(profile.actions.setInvestments({
						quantity: data.investmentQuantity,
						amount: data.investments
					}));
					dispatch(profile.actions.setCreatedAt(data.createdAt));
				});
				navigate('/');
			} else {
				handleErrors(data);
			}
		} catch (error) {
			console.error('Failed to sign up:', error);
			setErrorMessage('Failed to connect to the server. Please try again later.');
		} finally {
			dispatch(ui.actions.setLoading(false));
		}
	};

	// Displaying different error messages
	const handleErrors = (error) => {
		if (!error.error) {
			setErrorMessage(error.message || 'An unknown error occurred');
			return;
		}

		if (error.error.code === 11000) {
			if (error.error.keyValue.username) {
				setErrorMessage('This username is already taken');
			} else if (error.error.keyValue.email) {
				setErrorMessage('This email is already registered');
			} else {
				setErrorMessage(error.message);
			}
		} else if (error.error.errors) {
			const errorType = error.error.errors;
			if (errorType.username) {
				setErrorMessage(errorType.username.message);
			} else if (errorType.email) {
				setErrorMessage(errorType.email.message);
			} else {
				setErrorMessage('Please check your input and try again');
			}
		} else {
			setErrorMessage('An unexpected error occurred');
		}
	};

	const togglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<MainContainer>
			{loading && <Loader />}
			{!loading && (
				<>
					<Title>Citizen Ship</Title>
					<Form onSubmit={handleFormSubmit}>
						<InputWrapper>
							<TextInput
								type='text'
								placeholder='username'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</InputWrapper>
						<InputWrapper>
							<TextInput
								type='email'
								placeholder='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</InputWrapper>
						<InputWrapper>
							<TextInput
								type={showPassword ? 'password' : 'text'}
								placeholder='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
							<EyeButtonSignUp 
								type='button' 
								onClick={togglePassword}
								visible={password.length > 0}
							>
								{showPassword ? <FaEye /> : <FaEyeSlash />}
							</EyeButtonSignUp>
						</InputWrapper>
						<PasswordStrength password={password} />
						<ErrorMessageSignUp>{errorMessage}</ErrorMessageSignUp>
						<ChooseText>Choose your avatar:</ChooseText>
						<AvatarContainer>
							{avatars.map((avatarOption) => (
								<Avatars
									key={avatarOption}
									avatar={avatarOption}
									image={require(`../assets/${avatarOption}.png`)}
									onChange={() => setAvatar(avatarOption)}
									checked={avatar === avatarOption}
								/>
							))}
						</AvatarContainer>
						<SubmitButton
							type='submit'
							text='Become a citizen'
						/>
						<ChangeLogIn
							text='Already a citizen?'
							link='/signin'
							linkText='Board ship here!'
						/>
					</Form>
					<ChooseText>Color your spaceship:</ChooseText>
					<ThemeButtons />
				</>
			)}
		</MainContainer>
	);
};
