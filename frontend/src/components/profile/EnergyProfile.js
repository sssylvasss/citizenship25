import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { profile } from '../../reducers/profile';
import { SmallDialog } from '../reusables/SmallDialog';
import {
	EnergyContainer,
	EnergyText,
	AlertIcon } from './Styling';

export const EnergyProfile = ({ openEnergy, toggleEnergy }) => {
	const [alert, setAlert] = useState(false);
	const [open, setOpen] = useState(false);
	const energy = useSelector((store) => store.profile.energy);
	const createdAt = useSelector((store) => store.profile.createdAt);
	const ranking = useSelector((store) => store.profile.ranking);

	const dispatch = useDispatch();

	// Variables to calculate daily average energy
	const createdAtDate = moment(createdAt);
	const today = moment().add(1, 'day');
	const difference = today.diff(createdAtDate, 'days');
	const averageEnergy = energy / difference;
	const delay = 1000 * 60 * 30;

	// Alerting when energy is low
	// Decrease ranking after 30min if not buying food
	useEffect(() => {
		if (averageEnergy < 1500) {
			setAlert(true);
			if (ranking >= 1) {
				setTimeout(() => {
					dispatch(updateRanking(-1));
				}, delay);
			}
		} else {
			setAlert(false);
		}
	}, [averageEnergy, delay, dispatch, ranking]);

	const onToggleDialog = () => {
		setOpen(!open);
	};

	return (
		<EnergyContainer>
			<EnergyText>
				My average intake: {averageEnergy.toFixed(0)} kcal
				{alert && <AlertIcon tabIndex='0' onClick={onToggleDialog}></AlertIcon>}
			</EnergyText>
			<SmallDialog
				open={open}
				headerText='Citizen Energy'
				onClose={onToggleDialog}
				text='Your energy intake is running dangerously low! You need to eat something or
				your ranking will go down with 1.' />
			<EnergyText>Needed average: 2000 kcal</EnergyText>
			<SmallDialog
				open={openEnergy}
				headerText='Citizen Energy'
				onClose={toggleEnergy}
				text='To be a strong citizen your average intake should be minimum 2000 kcal and if you are falling below 
				1500 kcal you need to eat within 30 minutes, otherwise you will lose ranking!' />
		</EnergyContainer>
	);
};
