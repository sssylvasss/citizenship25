import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { updateBadges } from '../reducers/profile';
import { MemoryBoard } from '../components/memory/MemoryBoard';
import { GameFinish } from '../components/reusables/GameFinish';
import { Header } from '../components/header/Header';
import { Camera } from '../components/header/Camera';
import { BadgesAnimation } from '../components/animations/BadgesAnimation';
import { GAME_STATUS } from '../components/memory/constants';
import { MainContainer } from '../components/memory/Styling';

export const MemoryGame = () => {
	const [openWin, setOpenWin] = useState(false);
	const [gameStatus, setGameStatus] = useState(GAME_STATUS.CREATING);
	const [gameResults, setGameResults] = useState(0);
	const [animation, setAnimation] = useState(false);
	const accessToken = useSelector((store) => store.profile.accessToken);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (!accessToken) {
			navigate('/signin');
		}
	}, [accessToken, navigate]);

	// Checking for game updates
	// If status is finished, set win dialog
	const handleStatusUpdate = (newStatus, results) => {
		setGameStatus(newStatus);
		if (newStatus === GAME_STATUS.FINISHED) {
			setGameResults(results);
			setOpenWin(true);
		}
	};

	// Collect badges when finished game
	const handleCollectBadges = () => {
		setOpenWin(false);
		setAnimation(true);
		if (gameResults.flips <= 24) {
			dispatch(updateBadges(20));
		}
		if (gameResults.flips > 24) {
			dispatch(updateBadges(10));
		}
		setTimeout(() => {
			navigate('/');
		}, 2000);
	};

	return (
		<>
			<Header />
			<Camera />
			<MainContainer>
				<MemoryBoard
					gameStatus={gameStatus}
					onGameUpdate={handleStatusUpdate}
					onReset={handleStatusUpdate}
				/>
				{gameStatus === GAME_STATUS.FINISHED && (
					<GameFinish
						open={openWin}
						topText='You made it with'
						score={gameResults.flips}
						textTwo='flips, which gives you'
						points={gameResults.flips > 24 ? '10' : '20'}
						textThree='badges!'
						onClick={handleCollectBadges}
						button='Collect badges' />
				)}
			{animation && <BadgesAnimation text={gameResults.flips > 24 ? '10' : '20'} />}
		</MainContainer>
		</>
	)
};
