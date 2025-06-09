import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	updateBadges,
	updateCoins,
	updateInvestments,
} from '../../reducers/profile';
import { InvestCard } from './InvestCard';
import { PriceChange } from './PriceChange';
import { InvestDialog } from './InvestDialog';
import { ExchangeDialog } from './ExchangeDialog';
import audio from '../../assets/CoinDrop 6103_48_4.wav';

export const Currency = () => {
	const [currency, setCurrency] = useState([]);
	const [openExchange, setOpenExchange] = useState(false);
	const [open, setOpen] = useState(false);
	const [exchangeSuccess, setExchangeSuccess] = useState(true);
	const [openInvest, setOpenInvest] = useState(false);
	const [exchangeValue, setExchangeValue] = useState('');
	const [investValue, setInvestValue] = useState('');
	const [openConfirmExchange, setOpenConfirmExchange] = useState(false);
	const [openConfirmInvest, setOpenConfirmInvest] = useState(false);
	const [investSuccess, setInvestSuccess] = useState(false);
	const coins = useSelector((store) => store.profile.coins);
	const badges = useSelector((store) => store.profile.badges);

	const dispatch = useDispatch();

	useEffect(() => {
		fetchCoin();
	}, []);

	// Fetch one currency
	const fetchCoin = () => {
		fetch('https://api.coinlore.net/api/ticker/?id=32360')
			.then((res) => res.json())
			.then((json) => {
				setCurrency(json[0]);
			});
	};

	// Main dialog with price and changes
	const onToggleDialog = () => {
		setOpen(!open);
	};

	// Toggle Exchange Dialog
	const onToggleExchangeDialog = () => {
		setOpenExchange(!openExchange);
	};

	// Calculates exchange rate
	const totalExchange = (exchangeValue * currency.price_usd) / 5;

	// Update badges and coins
	// Only if enough badges
	// Set coin sound if successful
	const onExchange = () => {
		if (badges >= exchangeValue) {
			new Audio(audio).play();
			dispatch(updateBadges(-exchangeValue));
			dispatch(updateCoins(totalExchange));
			setOpenConfirmExchange(true);
			setExchangeSuccess(true);
			setExchangeValue('');
		} else {
			setExchangeSuccess(false);
			setOpenConfirmExchange(true);
		}
	};

	// Toggle exchange confirmed dialog
	const onToggleConfirmedExchange = () => {
		setOpenConfirmExchange(!openConfirmExchange);
		setOpenExchange(false);
	};

	// Toggle Investment Dialog
	const onToggleInvestDialog = () => {
		setOpenInvest(!openInvest);
	};

	// Calculates investment
	const totalInvest = investValue * currency.price_usd;

	// Update investment and coins
	// Only if enough coins
	// Set coin sound
	const onInvest = () => {
		if (totalInvest <= coins) {
			new Audio(audio).play();
			dispatch(updateInvestments(investValue, totalInvest));
			dispatch(updateCoins(-totalInvest));
			setOpenConfirmInvest(true);
			setInvestSuccess(true);
			setInvestValue('');
		} else {
			setOpenConfirmInvest(true);
			setInvestSuccess(false);
		}
	};

	// Toggle Invest confirmation dialog
	const onToggleInvestConfirm = () => {
		setOpenConfirmInvest(!openConfirmInvest);
		setOpenInvest(false);
	};

	return (
		<>
			<InvestCard onClick={onToggleDialog} />
			<PriceChange
				open={open}
				onClose={onToggleDialog}
				toggleExchangeDialog={onToggleExchangeDialog}
				toggleInvestDialog={onToggleInvestDialog}
			/>
			<ExchangeDialog
				openExchange={openExchange}
				onCloseExchange={onToggleExchangeDialog}
				rate={currency.price_usd}
				onChange={(e) => setExchangeValue(e.target.value)}
				value={exchangeValue}
				badges={badges}
				totalExchange={totalExchange.toFixed(2)}
				onClick={onExchange}
				open={openConfirmExchange}
				onClose={onToggleConfirmedExchange}
				confirmText={
					exchangeSuccess
						? 'You have now received some coins which you can see on your profile!'
						: 'You do not have enough badges!'
				}
				buttonText={exchangeSuccess ? 'Thanks!' : 'Okay!'}
			/>
			<InvestDialog
				open={openInvest}
				onClose={onToggleInvestDialog}
				rate={currency.price_usd}
				value={investValue}
				onChange={(e) => setInvestValue(e.target.value)}
				spaceValue={totalInvest.toFixed(2)}
				coins={coins === null ? coins : coins.toFixed(2)}
				onClick={onInvest}
				openConfirm={openConfirmInvest}
				onCloseConfirm={onToggleInvestConfirm}
				confirmText={
					investSuccess
						? 'You have now successfully invested in Space $ and can shortly see it on your profile'
						: 'You do not have enough coins for this investment'
				}
				buttonText={investSuccess ? 'Thanks!' : 'Okay'}
			/>
		</>
	)
};
