import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { profile } from './reducers/profile';
import { cart } from './reducers/cart';
import { products } from './reducers/products';
import { food } from './reducers/food';
import { themes } from './reducers/themes';
import { ui } from './reducers/ui';
import { housing } from './reducers/housing';
import { Theme } from './components/theme/Theme';
import { Store } from './pages/Store';
import { Main } from './pages/Main';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Classroom } from './pages/Classroom';
import { MemoryGame } from './pages/MemoryGame';
import { ProteinFarm } from './pages/ProteinFarm';
import { GameBall } from './components/spaceball/GameBall';
import { Quiz } from './pages/Quiz';
// import { SnakeGame } from './components/floor-two/snake/SnakeGame';
// import { ChefsTable } from './components/floor-two/chefstable/ChefsTable';
// import { Hangman } from './components/floor-two/hangman/Hangman';

const reducer = combineReducers({
	themes: themes.reducer,
	profile: profile.reducer,
	ui: ui.reducer,
	cart: cart.reducer,
	products: products.reducer,
	food: food.reducer,
	housing: housing.reducer,
});

const store = configureStore({ reducer });

// Configure future flags for React Router v6
const routerFutureConfig = {
	v7_startTransition: true,
	v7_relativeSplatPath: true
};

export const App = () => {
	return (
		<Provider store={store}>
			<Theme>
				<BrowserRouter future={routerFutureConfig}>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/signin' element={<SignIn />} />
						<Route path='/signup' element={<SignUp />} />
						<Route path='/classroom' element={<Classroom />} />
						<Route path='/memorygame' element={<MemoryGame />} />
						<Route path='/store' element={<Store />} />
						<Route path='/farm' element={<ProteinFarm />} />
						<Route path='/spaceball' element={<GameBall />} />
						<Route path='/quiz' element={<Quiz />} />
						{/* <Route path='/snakegame' element={<SnakeGame />} />
						<Route path='/chefstable' element={<ChefsTable />} />
						<Route path='/hangman' element={<Hangman />} /> */}
					</Routes>
				</BrowserRouter>
			</Theme>
		</Provider>
	);
};
