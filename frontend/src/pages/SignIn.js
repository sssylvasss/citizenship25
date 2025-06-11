import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import audio from '../assets/Whoosh 6110_64_1.wav';
import { profile } from '../reducers/profile';
import { ui } from '../reducers/ui';
import { TextInputSignIn } from '../components/signinupform/TextInput';
import { SubmitButtonSignIn } from '../components/signinupform/SubmitButton';
import { ChangeSignUp } from '../components/signinupform/ChangeLogIn';
import { TitleAnimation } from '../components/signinupform/TitleAnimation';
import { Loader } from '../components/loader/Loader';
import {
	MainContainer,
	Form,
	ErrorMessage,
	EyeButton,
	InputWrapper
} from '../components/signinupform/Styling';
import { API_URL } from '../utils/utils';

export const SignIn = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [mode] = useState('signin');
	const accessToken = useSelector((store) => store.profile.accessToken);
	const errorMessage = useSelector((store) => store.profile.errorMessage);
	const loading = useSelector((store) => store.ui.isLoading);
	const [showPassword, setShowPassword] = useState(true);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (accessToken) {
			navigate('/');
		}
	}, [accessToken, navigate]);

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		dispatch(ui.actions.setLoading(true));
		
		try {
			const options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				credentials: 'include',
				body: JSON.stringify({ username, password })
			};

			const response = await fetch(API_URL('signin'), options);
			const data = await response.json();

			if (data.success) {
				const sound = new Audio(audio);
				sound.play().catch(err => console.log('Audio playback failed:', err));
				
				batch(() => {
					dispatch(profile.actions.setUsername(data.username));
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
					dispatch(profile.actions.setErrorMessage(null));
					dispatch(ui.actions.setAnimation(true));
				});
				navigate('/');
			} else {
				batch(() => {
					dispatch(profile.actions.setAccessToken(null));
					dispatch(profile.actions.setUsername(null));
					dispatch(profile.actions.setErrorMessage(data.message || 'Login failed'));
				});
			}
		} catch (error) {
			console.error('Failed to sign in:', error);
			dispatch(profile.actions.setErrorMessage('Failed to connect to the server. Please try again later.'));
		} finally {
			dispatch(ui.actions.setLoading(false));
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
					<TitleAnimation />
					<Form onSubmit={handleFormSubmit}>
						<InputWrapper>
							<TextInputSignIn
								type='text'
								placeholder='username'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</InputWrapper>
						<InputWrapper>
							<TextInputSignIn
								type={showPassword ? 'password' : 'text'}
								placeholder='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<EyeButton 
								type='button' 
								onClick={togglePassword}
								visible={password.length > 0}
							>
								{showPassword ? <FaEye /> : <FaEyeSlash />}
							</EyeButton>
						</InputWrapper>
						{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
						<SubmitButtonSignIn
							type='submit'
							text='Board ship'
						/>
						<ChangeSignUp
							text='Not a citizen yet?'
							link='/signup'
							linkText='Become one here!'
						/>
					</Form>
				</>
			)}
		</MainContainer>
	);
};
