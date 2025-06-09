import React, { useState } from 'react';

import { BigDialog } from '../reusables/BigDialog';
import { RoomQuiz, QuizIcon } from './Styling';

export const Quiz = () => {
	const [openGame, setOpenGame] = useState(false);

	const onToggleGameDialog = () => {
		setOpenGame(!openGame);
	};

	return (
		<>
			<RoomQuiz 
				tabIndex='0' 
				aria-label='Quiz' 
				onClick={onToggleGameDialog}>
				<QuizIcon />
			</RoomQuiz>
			<BigDialog
				open={openGame}
				onClose={onToggleGameDialog}
				titleText='Quiz time!'
				text='In here there is a quiz with true or false question. But there is a challenge with jumping circles and buttons.
				But at least you get to choose the difficulty level of the questions between:'
				list
				itemOne='EASY!'
				itemTwo='HARD!'
				gameLink='/quiz'
				gameButton='Lets start' />
		</>
	)
};
