import React, { useState } from 'react';

import { BigDialog } from '../reusables/BigDialog';
import { RoomFarm, FishIcon } from './Styling';

export const ProteinFarm = () => {
	const [openGame, setOpenGame] = useState(false);

	const onToggleGameDialog = () => {
		setOpenGame(!openGame);
	};

	return (
		<>
			<RoomFarm 
				tabIndex='0' 
				aria-label='Protein Farm' 
				onClick={onToggleGameDialog}>
				<FishIcon />
			</RoomFarm>
			<BigDialog
				open={openGame}
				onClose={onToggleGameDialog}
				titleText='Protein Farm'
				text='Catch the fishes.'
				gameLink='/farm'
				gameButton='Lets Start' />
		</>			
	)
};
