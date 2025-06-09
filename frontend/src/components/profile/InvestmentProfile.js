import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dialog from '@mui/material/Dialog';

import audio from '../../assets/CoinDrop 6103_48_4.wav';
import { 
	updateCoins, 
	updateInvestments, 
	updateRanking } from '../../reducers/profile';
import {
	InvestmentContainer,
	InvestmentText,
	SellButton,
	InvestmentChange,
	ValueChange,
	IconUp,
	IconDown,
	ConfirmDialog,
	ButtonBox
} from './Styling';

export const InvestmentProfile = () => {
	const [currency, setCurrency] = useState([]);
	const [error, setError] = useState(null);
	const [openConfirm, setOpenConfirm] = useState(false);
	const investments = useSelector((store) => store.profile.investments);
	const investmentQuantity = useSelector(
		(store) => store.profile.investmentQuantity
	);
	
	const dispatch = useDispatch();

	useEffect(() => {
		fetchCoin();
	}, []);

	// Fetch one currency
	const fetchCoin = async () => {
		try {
			const response = await fetch('https://api.coinlore.net/api/ticker/?id=32360', {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
				}
			});
			
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			
			const json = await response.json();
			if (json && json.length > 0) {
				setCurrency(json[0]);
				setError(null);
			} else {
				setError('No data available');
			}
		} catch (err) {
			console.error('Failed to fetch currency data:', err);
			setError('Failed to load currency data');
			// Set a fallback value to prevent calculation errors
			setCurrency({ price_usd: investments > 0 ? investments/investmentQuantity : 0 });
		}
	};

	const onToggleConfirm = () => {
		setOpenConfirm(!openConfirm);
	};

	// Variables to get different values of investment
	const totalMarketValue = investmentQuantity * (currency?.price_usd || 0);
	const difference = totalMarketValue - investments;
	const percentDifference = investments > 0 ? (difference/investments * 100) : 0;

	const onSellInvestment = () => {
		new Audio(audio).play();
		dispatch(updateInvestments(-investmentQuantity, -investments));
		dispatch(updateCoins(totalMarketValue));
		if (percentDifference > 10) {
			dispatch(updateRanking(1));
		}
	};

	return (
		<InvestmentContainer>
			{error ? (
				<InvestmentText>{error}</InvestmentText>
			) : investments > 0 ? (
				<>
					<InvestmentText>Quantity: {investmentQuantity}st</InvestmentText>
					<InvestmentText>
						Initial investment: {investments.toFixed(2)}$
					</InvestmentText>
					<InvestmentText>
						Current value: {totalMarketValue.toFixed(2)}$
					</InvestmentText>
					<InvestmentChange>
						Since purchase:
						<ValueChange percent={difference < 0}>
							{investments > totalMarketValue ? <IconDown /> : <IconUp />}
							{percentDifference.toFixed(2)}% 
							({difference.toFixed(2)}$)
						</ValueChange>
					</InvestmentChange>
					<SellButton onClick={onToggleConfirm}>Sell investment</SellButton>
					<Dialog open={openConfirm} onClose={onToggleConfirm}>
						<ConfirmDialog>
							Are you sure you want to sell your investment?
							You have {difference > 0 ? 'made' : 'lost'} {difference.toFixed(2)} $
							{percentDifference >= 10 ? 'You have increased your investment with more than 10% so you will also gain 1 i ranking!' : ''}
							<ButtonBox>
								<SellButton onClick={onSellInvestment}>Yes, sell!</SellButton>
								<SellButton onClick={onToggleConfirm}>No, cancel!</SellButton>
							</ButtonBox>
						</ConfirmDialog>
					</Dialog>
				</>
			) : (
				<InvestmentText>You have no investments.</InvestmentText>
			)}
		</InvestmentContainer>
	)
};
