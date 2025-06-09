import React, { useState, useEffect } from 'react';

import { 
  Container, 
  TextContainer, 
  Title, 
  ChangeContainer, 
  ChangeText, 
  CoinChange, 
  IconDown, 
  IconUp, 
  SeeMoreButton } from './Styling';

export const InvestCard = ({ onClick }) => {
  const [currency, setCurrency] = useState([]);

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

  return (
    <Container>
      <TextContainer>
        <Title>
          Space $
        </Title>
        <ChangeText>Exchange rate: 5 badges = {currency.price_usd} $</ChangeText>
        <ChangeContainer>
          <ChangeText>Last hour:</ChangeText>
          <CoinChange data-negative={currency.percent_change_1h < 0 ? "true" : "false"}>
            {currency.percent_change_1h < 0 ? <IconDown /> : <IconUp />}
            {currency.percent_change_1h === null ? '0' : currency.percent_change_1h} %
          </CoinChange>
        </ChangeContainer>
      </TextContainer>
      <SeeMoreButton onClick={onClick}>Exchange & Invest</SeeMoreButton>
    </Container>
  )
};
