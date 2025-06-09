import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';

import { profile } from '../../reducers/profile';
import { ItemsProfile } from './ItemsProfile';
import { ProfileStats } from './ProfileStats';
import { InvestmentProfile } from './InvestmentProfile';
import { EnergyProfile } from './EnergyProfile';
import { Settings } from './settings/Settings';
import { Buttons } from './Buttons';
import { SmallDialog } from '../reusables/SmallDialog';
import { 
	Main,
	ProfileContainer, 
	DaysContainer, 
	DaysText, 
	Items,
	Investments,
	InfoIcon,
	ContainerTitle } from './Styling';

export const Profile = () => {
	const [openSettings, setOpenSettings] = useState(false);
	const [openEnergy, setOpenEnergy] = useState(false);
	const [openInfo, setOpenInfo] = useState(false);
	const username = useSelector((store) => store.profile.username);
	const avatar = useSelector((store) => store.profile.avatar);
	const createdAt = useSelector((store) => store.profile.createdAt);
	const badges = useSelector((store) => store.profile.badges);
	const ranking = useSelector((store) => store.profile.ranking);
	const coins = useSelector((store) => store.profile.coins);
	const items = useSelector((store) => store.profile.items);
	const myItems = Object.keys(items);

	const today = moment();
	const arrivalDate = moment([2029, 5, 18])
	const timeToDestination = arrivalDate.diff(today, 'days');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onLogout = () => {
		dispatch(profile.actions.setLogOut())
		navigate('/');
	};

	const toggleSettings = () => {
		setOpenSettings(!openSettings)
	};

	const toggleEnergy = () => {
		setOpenEnergy(!openEnergy);
	};

	const toggleInfo = () => {
		setOpenInfo(!openInfo);
	};

	return (
		<Main>
			<ProfileContainer>
				<ProfileStats 
					avatar={require(`../../assets/${avatar}.png`)}
					username={username} 
					badges={badges} 
					ranking={ranking === null ? ranking : ranking.toFixed(1)} 
					coins={coins === null ? coins : coins.toFixed(2)} />
				<DaysContainer>
					<DaysText>Time on ship: {moment(createdAt).toNow(true)}</DaysText>
					<DaysText>
						Days to destination: {timeToDestination}
					</DaysText>
				</DaysContainer>
				<Items>
					<ContainerTitle>My energy
						<InfoIcon tabIndex='0' onClick={toggleEnergy} />
					</ContainerTitle>
					<EnergyProfile 
						openEnergy={openEnergy}
						toggleEnergy={toggleEnergy} />
				</Items>
				<Items>
					<ContainerTitle>My items</ContainerTitle>
					{myItems.map((key) => <ItemsProfile key={key} item={items[key]} />)}
				</Items>
				<Investments>
					<ContainerTitle>My investments 
						<InfoIcon tabIndex='0' onClick={toggleInfo} />
					</ContainerTitle>
					<SmallDialog
						open={openInfo}
						headerText='citizen invest' 
						onClose={toggleInfo} 
						text='If you sell your investment with more than 10% up, your ranking will go up 1!' />
					<InvestmentProfile />
				</Investments>
			</ProfileContainer>
			<Buttons onSettings={toggleSettings} onClick={onLogout} />
			<Dialog open={openSettings} onClose={toggleSettings}>
				<Settings tabIndex='0' onClose={toggleSettings} />
			</Dialog>
		</Main>
	)
};

