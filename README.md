# Project Auth

Fullstack project created as the final project during Technigos Bootcamp. It is a game called Citizen Ship where you can play different games and collect badges. The badges you can exchange for coins which you can use to invest in Space$, buy food and other things in the store. These things will increase your ranking, which is the main goal of the game! :) 

## Problems and Features

These four weeks working with this project has been very fun and we've had a great teamwork. We haven't had any major problems but of course we've hit some obstacles but it has mainly been relatively small ones that we have been able to work out with the help of google and just trial and error. We wanted to do SO much and coming up with new ides basically every day so one problem is probably that we had to choose what to focus on since we only had four weeks. But we are extremly happy with all that we managed to do and this will be a project that we will keep working on in the future as well with adding more games and other features :)

We started off with just doing the basic layout on the frontend and then we started off with the backend. We created two mongoose models, one for the user (citizen) and one for posting messages. 
The user models consists of for example the ranking, badges, coins, items and game highscores. 
The main goal of this game is to get as high of a ranking as possible (you start off with 1 and you can get up to a 100). To increase your ranking you need to collect badges which you can do in the different games. You then need to exchange the badges for coins. The coins you can then use to invest in Space$, buy food and other things in the shop which will then increase your ranking.

# THE GAMES AND BADGES

* Math Game
  - In here you can choose between three different levels. Easy, Medium and Hard. You get different number spans and amount of time depending on what you choose. If you choose the hard one, you also get double the amount of badges. Otherwise you get one badge per correct answer.

* Memory
  - A classic memory game! We're using picsum to get random pictures, so it's not the same every time! This game will give you 10 badges when you manage to solve it.

* Fish Game
  - In here we have a wave and fishes that jump out of it. The goal is to catch the fishes. You press on the fishes and they will disappear and you get one point which equals one badge.

* Quiz
  - Here we're using a Trivia API to fetch random boolean questions. We made it a bit harder with buttons that are not still and an animation that jumps in front of the questions. You have 30 seconds and every correct answer equals one badge.

* Space Ball
  - Here we have different colored balls flying around. When you manage to click on one you get points and you get different points depending on which ball you click. The smaller and faster one gives you more. You have 30 seconds to collect points and 3 points equals one badge. 

# THE SHOP, INVESTING AND COINS

You use the badges to exchange them for Space coins. Two badges equals one space coin. 

* Investing
  - You can then invest the money in Space$ and we're fetching the price of a cryptocurrency so that the price fluctuates and you can actually make/lose money on your investment. You will be able to follow the investment on your profile and can then choose to sell it and if you sell it and you made more than 10% your ranking will go up!

* Shop
  - We also have a shop where you can purchase different items with your coins and the items will also be saved on your profile! When you buy items your ranking will also increase, how much depends on what you purchase! The more expensive items of course increases your ranking more. 

* Energy Intake
  - We also have a restaurant where you can buy food. It is important to eat on the ship and we have made a function that calculates your average energy intake. If it falls below 1500 kcal, your ranking will go down within 30 minutes if you don't eat. You will get a warning when you get there! You can see it both on your avatar in the corner and on your profile so you can't miss it! And you can't buy infinite amount of food at once (you need to share the energy with all the other citizens).

# PROFILE AND SETTINGS

If you press your avatar in the corner you can see your profile. There you can see how many badges and coins you have and a progress bar to see how high your ranking is. You can also see how many days you've been on the ship (how many days since you signed up). You can also see all the items you own (the things you've bought in the shop). You can see your average energy intake so you can keep track on when you need to buy more food! You can also see your investment, the quantity of your investment, initial purchase price, current value of investment, how much it has increased/decreased both in $ and %. 

On the bottom there is a settings button and a logging out button. If you click on the settings button you can change your avatar, the color of your spaceship and you can change your password. 

# OTHER FEATURES

* Rolling Info Bar
  - We have a rolling info bar in the bottom for the weather and the housing at the destination! If you click on the weather you can also see the forecast. We're using OpenWeather API to fetch the weather. If you click on the housing one you can see different ads for different houses you can buy on the destination. They are superexpensive so you have to play a looot to be able to buy them. 

* Bedroom & Gym
  - On the map other than the games and the shop we also have a bedroom and a gym. You can pay with badges in both of them and your ranking will increase a little if you pay to sleep or workout. The buttons get disabled for 30 minutes afterwards so you can't sleep or workout all the time to increase your ranking :)

* Info
  - There is also a info room where you can read a little about how the ship works! Other than the info room we have small info buttons here and there where you can read more about specific things. 

* Message Board
  - In the header next to the avatar we have a message icon where you can click and get to the message board. There you can post messages that all the other citizens can see!

* Sounds
  - We have different sounds here and there. For example in the animation on the logging in page, when you're exchanging or investing money, when you purchase things and in all the different games :) 

* LeaderBoard
  - On the main page we have a leaderboard that lists all the citizens and you can see their ranking, days on the ship, badges and coins. The default sorting is on the ranking but you can click on the 'titles' and instead sort on most badges, coins and days on ship. The logged in citizen has a little star next to their name so you easily can see yourself!

* Game Highscore Board
  - On the main page there is also a highscore board for the Mathgame, Spaceball and the Fishgame. You can click on the icons and will sort on the highest score in that game. When you play the games, we're only updating the score in the backend if it's a new highscore for you!


Everything of course is connected to the backend and gets saved in the database!

Like we wrote at the top, we've had so much fun with this project and we will keep working on it to add more things! It's been a smooth process for the most parts! We have worked a lot together but also divided up different things and worked on our separate branches.

# BACKEND

* Endpoints
  - path: '/citizens' - GET all the citizens.
  - path: '/citizen/:id/password' - PATCH to updated password.
  - path: '/signup' - POST to sign up.
  - path: '/signin' - POST to sign in.
  - path: '/citizenmessage' - GET all messages for the messageboard.
  - path: '/citizenmessage/:userid' - POST message.
  - path: '/citizen/:id/avatar' - PATCH to update avatar.
  - path: '/citizen/:id/badges' - PATCH to update number of badges.
  - path: '/citizen/:id/ranking' - PATCH to update ranking.
  - path: '/citizen/:id/coins' - PATCH to update amount of coins.
  - path: '/citizen/:id/items' - POST for the items purchased in the shop.
  - path: '/citizen/:id/investments' - PATCH to update the investment.
  - path: '/citizen/:id/energy' - PATCH to update the energy intake.
  - path: '/citizen/:id/highscoreSpaceball' - PATCH to update the highscore in Space Ball.
  - path: '/citizen/:id/highscoreFish' - PATCH to update the highscore in the Fish game.
  - path: '/citizen/:id/highscoreMath' - PATCH to update the highscore in the Math game.


## View it live

* https://citizen-ship.netlify.app/
* https://citizen-ship.herokuapp.com/

## Environment Variables

The following environment variables are required for the backend:

```env
MONGO_URL=your_mongodb_atlas_connection_string
PORT=8080
JWT_SECRET=your_jwt_secret
```

### Setting Up MongoDB

1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Set up a new cluster
3. Get your connection string from MongoDB Atlas
4. For local development:
   - Install MongoDB Compass for a GUI interface
   - Use the connection string in your .env file

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file in the backend directory and add your environment variables

4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment Instructions

### Backend Deployment (Render)

1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Configure the following settings:
   - Build Command: `cd backend && npm install`
   - Start Command: `cd backend && npm start`
   - Environment Variables:
     ```
     MONGO_URL=your_mongodb_url
     JWT_SECRET=your_jwt_secret
     PORT=10000
     ```
4. Click "Create Web Service"

### Frontend Deployment (Netlify)

1. Create a new site on [Netlify](https://netlify.com)
2. Connect your GitHub repository
3. Configure build settings:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `build`
4. Add environment variables:
   - Go to Site settings > Build & deploy > Environment
   - Add `REACT_APP_API_URL` with your Render backend URL

### Local Development with Production Backend

Create a `.env` file in your frontend directory:
```env
REACT_APP_API_URL=https://your-render-backend-url.onrender.com
```
