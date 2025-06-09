import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import { CARD_STATUS } from './constants';
import { Card, ImageCard } from './Styling';

export const MemoryCard = ({ data, handleClick, index }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [flipped, setFlipped] = useState(false);
	const { id, url, status } = data;
	const isSelected = status === CARD_STATUS.SELECTED;
	const isMatched = status === CARD_STATUS.MATCHED;

	const onCardClick = () => {
		if (status === CARD_STATUS.HIDDEN) {
			handleClick(index, id);
			setFlipped(true);
		}
	};

	const handleImageLoad = () => {
		setIsLoaded(true);
	};

	// Determining if card should be/stay flipped
	let isFlipped = false;
	if (isSelected) isFlipped = true;
	if (isMatched) isFlipped = true;

	return (
		<ReactCardFlip 
			isFlipped={isFlipped} 
			flipDirection='horizontal'>
			<Card 
				flipped={flipped} 
				onClick={onCardClick}></Card>
			<ImageCard 
				src={url} 
				alt='card' 
				onLoad={handleImageLoad} 
				isLoaded={isLoaded} />
		</ReactCardFlip>
	)
};
