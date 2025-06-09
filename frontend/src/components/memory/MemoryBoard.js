import React, { useState, useEffect, useCallback, useRef } from 'react';

import audio from '../../assets/Cards 6010_56_6.wav';
import { MemoryCard } from './MemoryCard';
import { GetImages } from './GetImages';
import { GameTitle } from '../reusables/GameTitle';
import { GameScore } from '../reusables/GameScore';
import { 
	CARD_STATUS, 
	GAME_STATUS, 
	DECK_SIZE } from './constants';
import {
	Container,
	GameContainer,
	GameGrid,
} from './Styling';

export const MemoryBoard = ({ gameStatus, onGameUpdate }) => {
	const [deck, setDeck] = useState({});
	const [isChecking, setIsChecking] = useState(false);
	const [firstCard, setFirstCard] = useState(null);
	const [secondCard, setSecondCard] = useState(null);
	const [openCardCounter, setOpenCardCounter] = useState(0);

	// Setting flip count
	const flipCounter = useRef(0);
	const isMounted = useRef(false);

	// Check if the flipped cards match
	const checkPair = useCallback(() => {
		if (firstCard && secondCard) {
			const first = { ...deck[firstCard.index] };
			const second = { ...deck[secondCard.index] };
			if (firstCard.id === secondCard.id) {
				first.status = CARD_STATUS.MATCHED;
				second.status = CARD_STATUS.MATCHED;
			} else {
				first.status = CARD_STATUS.HIDDEN;
				second.status = CARD_STATUS.HIDDEN;
			}

			const newDeck = {
				...deck,
				[firstCard.index]: first,
				[secondCard.index]: second,
			};

			setTimeout(() => {
				setDeck(newDeck);
			}, 800);

			setTimeout(resetCards, 800);
		}
	}, [deck, firstCard, secondCard]);

	// Reset all cards
	const resetCards = () => {
		setFirstCard(null);
		setSecondCard(null);
		setIsChecking(false);
	};

	const toggleCard = (index, status) => {
		const newDeck = { ...deck };
		const newCard = { ...newDeck[index] };
		newCard.status = status;
		newDeck[index] = newCard;
		setDeck(newDeck);
	};

	const handleClick = (index, id) => {
		new Audio(audio).play();
		if (isChecking) return;

		flipCounter.current++;

		if (openCardCounter < 2) {
			const newCount = openCardCounter + 1;
			const newCard = { index, id };
			setOpenCardCounter(newCount);

			if (newCount === 1) {
				setFirstCard(newCard);
			} else {
				setSecondCard(newCard);
				setIsChecking(true);
			}

			toggleCard(index, CARD_STATUS.SELECTED);
		}
	};

	// Check if the all cards are matched and game is finished
	const checkGameFinished = useCallback(() => {
		if (openCardCounter === 0) {
			const matches = Object.keys(deck).filter(
				(key) => deck[key].status === CARD_STATUS.MATCHED
			);

			// Game is finished
			if (matches.length === DECK_SIZE) {
				onGameUpdate(GAME_STATUS.FINISHED, {
					flips: flipCounter.current,
				});
			}
		} else if (openCardCounter === 2) {
			setOpenCardCounter(0);
			checkPair();
		}
	}, [checkPair, deck, openCardCounter, onGameUpdate]);

	// Start the game
	const startGame = useCallback(async () => {
		try {
			const newDeck = await GetImages();
			setDeck(newDeck);
			flipCounter.current = 0;
			onGameUpdate(GAME_STATUS.IN_PROGRESS);
		} catch (error) {
			alert(`Error: ${error}`);
		}
	}, [onGameUpdate]);

	// Initial render
	useEffect(() => {
		isMounted.current = true;
		if (isMounted.current && gameStatus === GAME_STATUS.CREATING) {
			startGame();
		}
		return () => {
			isMounted.current = false;
		};
	}, [gameStatus, startGame]);

	useEffect(() => {
		if (isMounted.current) {
			switch (gameStatus) {
				case GAME_STATUS.CREATING:
					break;
				case GAME_STATUS.IN_PROGRESS:
					checkGameFinished();
					break;
				case GAME_STATUS.FINISHED:
					break;
				default:
					break;
			}
		}
	}, [deck, checkGameFinished, gameStatus, onGameUpdate]);

	return (
		<>
		<GameTitle text='Memory Game' />
		<GameScore 
			type='Flips:'
			score={flipCounter.current || '0'} />
		<Container>
			<GameContainer>
				<GameGrid>
					{Object.entries(deck).map(([key, value]) => {
						return (
							<MemoryCard
								key={key}
								index={key}
								data={value}
								handleClick={handleClick}
							/>
						);
					})}
				</GameGrid>
			</GameContainer>
		</Container>
		</>
	)
};
