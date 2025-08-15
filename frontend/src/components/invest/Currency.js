import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  updateBadges,
  updateCoins,
  updateInvestments,
} from "../../reducers/profile";
import { InvestCard } from "./InvestCard";
import { PriceChange } from "./PriceChange";
import { InvestDialog } from "./InvestDialog";
import { ExchangeDialog } from "./ExchangeDialog";
import audio from "../../assets/CoinDrop 6103_48_4.wav";

export const Currency = () => {
  const [currency, setCurrency] = useState({ price_usd: 0 });
  const [openExchange, setOpenExchange] = useState(false);
  const [open, setOpen] = useState(false);
  const [exchangeSuccess, setExchangeSuccess] = useState(true);
  const [openInvest, setOpenInvest] = useState(false);
  const [exchangeValue, setExchangeValue] = useState("");
  const [investValue, setInvestValue] = useState("");
  const [openConfirmExchange, setOpenConfirmExchange] = useState(false);
  const [openConfirmInvest, setOpenConfirmInvest] = useState(false);
  const [investSuccess, setInvestSuccess] = useState(false);
  const coins = useSelector((store) => store.profile.coins) || 0;
  const badges = useSelector((store) => store.profile.badges) || 0;

  const dispatch = useDispatch();

  // Fetch one currency
  const fetchCoin = () => {
    fetch("https://api.coinlore.net/api/ticker/?id=32360")
      .then((res) => res.json())
      .then((json) => {
        if (json && json[0]) {
          setCurrency(json[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching currency:", error);
      });
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  // Main dialog with price and changes
  const onToggleDialog = () => {
    setOpen(!open);
  };

  // Toggle Exchange Dialog
  const onToggleExchangeDialog = () => {
    setOpenExchange(!openExchange);
  };

  // Calculates exchange rate
  const totalExchange = exchangeValue && currency.price_usd ? (exchangeValue * currency.price_usd) / 5 : 0;

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
      setExchangeValue("");
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
  const totalInvest = investValue && currency.price_usd ? investValue * currency.price_usd : 0;

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
      setInvestValue("");
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
        rate={currency.price_usd || 0}
        onChange={(e) => setExchangeValue(e.target.value)}
        value={exchangeValue}
        badges={badges}
        totalExchange={totalExchange ? totalExchange.toFixed(2) : "0.00"}
        onClick={onExchange}
        open={openConfirmExchange}
        onClose={onToggleConfirmedExchange}
        confirmText={
          exchangeSuccess
            ? "You have now received some coins which you can see on your profile!"
            : "You do not have enough badges!"
        }
        buttonText={exchangeSuccess ? "Thanks!" : "Okay!"}
      />
      <InvestDialog
        open={openInvest}
        onClose={onToggleInvestDialog}
        rate={currency.price_usd || 0}
        value={investValue}
        onChange={(e) => setInvestValue(e.target.value)}
        spaceValue={totalInvest ? totalInvest.toFixed(2) : "0.00"}
        coins={coins ? coins.toFixed(2) : "0.00"}
        onClick={onInvest}
        openConfirm={openConfirmInvest}
        onCloseConfirm={onToggleInvestConfirm}
        confirmText={
          investSuccess
            ? "You have now successfully invested in Space $ and can shortly see it on your profile"
            : "You do not have enough coins for this investment"
        }
        buttonText={investSuccess ? "Thanks!" : "Okay"}
      />
    </>
  );
};
