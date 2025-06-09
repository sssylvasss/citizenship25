import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import moment from 'moment';

import audio from '../../../assets/Whoosh 6110_64_1.wav';
import { updateEnergy, updateCoins } from '../../../reducers/profile';
import { Dialogs } from './Dialogs';
import { RoomRestaurant, RestaurantIcon } from '../Styling';
import { 
	Container,
	Title, 
	IconContainer, 
	CloseIcon, 
	SmallInfoIcon, 
	TableContainer, 
	TableHead, 
	TableTitle, 
	TableTitleHide, 
	Food, 
	FoodType, 
	FoodHide, 
	FoodList, 
	BuyFood } from './Styling';

export const Restaurant = () => {
	const [open, setOpen] = useState(false);
	const [openConfirmation, setOpenConfirmation] = useState(false);
	const [openFail, setOpenFail] = useState(false);
	const [openInfo, setOpenInfo] = useState(false);
	const allFood = useSelector((store) => store.food);
	const energy = useSelector((store) => store.profile.energy);
	const createdAt = useSelector((store) => store.profile.createdAt);
	const coins = useSelector((store) => store.profile.coins);
	const createdAtDate = moment(createdAt);
	const today = moment().add(1, 'day');
	const difference = today.diff(createdAtDate, 'days');
	const averageEnergy = energy / difference;

	const dispatch = useDispatch();

	const onToggleDialog = () => {
		setOpen(!open);
	};

	// Only allow purchase if under 3000 average energy
	const onBuy = (energy, price) => {
		if (averageEnergy < 3000 && price < coins) {
			new Audio(audio).play();
			setOpenConfirmation(true);
			dispatch(updateEnergy(energy));
			dispatch(updateCoins(- price))
			setTimeout(() => {
				setOpenConfirmation(false);
			}, 2000);
		} else {
				setOpenFail(true);
				setTimeout(() => {
					setOpenFail(false);
				}, 2000);
			}
	};

	const onToggleInfo = () => {
		setOpenInfo(!openInfo);
	};

	return (
		<>
			<RoomRestaurant 
				tabIndex='0' 
				aria-label='Restaurant' 
				onClick={onToggleDialog}>
				<RestaurantIcon />
			</RoomRestaurant>
			<Dialog open={open} onClose={onToggleDialog}>
				<Container>
				<Title>Nutrition 
					<IconContainer>
						<SmallInfoIcon tabIndex='0' onClick={onToggleInfo} />
						<CloseIcon tabIndex='0' onClick={onToggleDialog} />
					</IconContainer>
				</Title>
				<TableHead>
					<TableTitle>Type</TableTitle>
					<TableTitle>Energy</TableTitle>
					<TableTitleHide>Protein</TableTitleHide>
					<TableTitleHide>Salt</TableTitleHide>
					<TableTitle>Price</TableTitle>
				</TableHead>
				<TableContainer>
					{allFood.map((food) => (
						<FoodList key={food.id}>
							<FoodType>{food.title}</FoodType>
							<Food>{food.energy}kcal</Food>
							<FoodHide>{food.protein}g</FoodHide>
							<FoodHide>{food.salt}g</FoodHide>
							<Food>
								{food.price}$<BuyFood onClick={() => onBuy(food.energy, food.price)}>Buy</BuyFood>
							</Food>
						</FoodList>
					))}
				</TableContainer>
				</Container>
			</Dialog>
			<Dialogs 
				openInfo={openInfo} 
				onToggleInfo={onToggleInfo}
				openConfirmation={openConfirmation}
				openFail={openFail}
				failText={averageEnergy > 3000 ? 'Your energy is already too high.' : 'You do not have enough money.'} />
		</>
	)
};
