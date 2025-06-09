import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RollingInfoBar } from '../components/rollingInfoBar/RollingInfoBar';
import { Header } from '../components/header/Header';
import { Camera } from '../components/header/Camera';
import { Map } from '../components/map/Map';
import { Currency } from '../components/invest/Currency';
import { LeaderBoard } from '../components/leaderboard/LeaderBoard';
import { HighscoreBoard } from '../components/highscore/HighscoreBoard';
import { 
	MainContainer, 
	Container, 
	MapContainer, 
	BottomContainer, 
	WrapperLeaderBoard,
	CardTitle,
	CitizensContainer,
	WrapperCard, 
	CardContainer,
	CardTitleHighscore,
 } from '../components/main/Styling';

export const Main = () => {
	const accessToken = useSelector((store) => store.profile.accessToken);

	const navigate = useNavigate();

	useEffect(() => {
		if (!accessToken) {
			navigate('/signin');
		}
	}, [accessToken, navigate]);

	return (
		<MainContainer>
			<Header />
			<Camera />
			<Container>
				<MapContainer>
					<Map />
				</MapContainer>
			</Container>
			<BottomContainer>
				<WrapperLeaderBoard>
					<CardTitle>Citizens Leaderboard</CardTitle>
					<CitizensContainer>
						<LeaderBoard />
					</CitizensContainer>
				</WrapperLeaderBoard>
				<WrapperCard>
					<CardTitle>Citizen Stock Exchange</CardTitle>
						<CardContainer>
							<Currency />
						</CardContainer>
						<CardTitleHighscore>Game Highscores</CardTitleHighscore>
						<CardContainer>
							<HighscoreBoard />
						</CardContainer>
				</WrapperCard>
				<RollingInfoBar />
			</BottomContainer>
		</MainContainer>
	)
};