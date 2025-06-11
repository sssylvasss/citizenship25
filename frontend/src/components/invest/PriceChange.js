import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";

import {
  DialogContainer,
  CurrencyTitle,
  Text,
  ButtonContainer,
  ExchangeButton,
  InvestmentButton,
  PercentChange,
  CloseIcon,
} from "./Styling";

export const PriceChange = ({
  open,
  onClose,
  toggleExchangeDialog,
  toggleInvestDialog,
}) => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    fetchCoin();
  }, []);

  // Fetch one  currency
  const fetchCoin = () => {
    fetch("https://api.coinlore.net/api/ticker/?id=32360")
      .then((res) => res.json())
      .then((json) => {
        setCurrency(json[0]);
      });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContainer>
        <CurrencyTitle>
          SPACE $
          <CloseIcon onClick={onClose} />
        </CurrencyTitle>
        <Text>Price: {currency.price_usd} $</Text>
        <Text>
          Change in last hour:
          <PercentChange data-negative={currency.percent_change_1h < 0}>
            {currency.percent_change_1h === null
              ? "0"
              : currency.percent_change_1h}
            %
          </PercentChange>
        </Text>
        <Text>
          Change in last 24 hours:
          <PercentChange data-negative={currency.percent_change_24h < 0}>
            {currency.percent_change_24h}%
          </PercentChange>
        </Text>
        <Text>
          Change in the last week:
          <PercentChange data-negative={currency.percent_change_7d < 0}>
            {currency.percent_change_7d}%
          </PercentChange>
        </Text>
        <Text>Exchange rate: 5 badge = {currency.price_usd} $</Text>
        <ButtonContainer>
          <ExchangeButton onClick={toggleExchangeDialog}>
            Exchange
          </ExchangeButton>
          <InvestmentButton onClick={toggleInvestDialog}>
            Invest in SPACE$
          </InvestmentButton>
        </ButtonContainer>
      </DialogContainer>
    </Dialog>
  );
};
