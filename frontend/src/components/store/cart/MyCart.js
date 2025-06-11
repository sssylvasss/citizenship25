import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Dialog from "@mui/material/Dialog";
import Badge from "@mui/material/Badge";

import audio from "../../../assets/Whoosh 6110_64_1.wav";
import {
  updateCoins,
  updateItems,
  updateRanking,
} from "../../../reducers/profile";
import { cart } from "../../../reducers/cart";
import { CartItem } from "./CartItem";
import { ConfirmationDialogs } from "./ConfirmationDialogs";
import {
  CartWrapper,
  DialogContainer,
  DialogHeader,
  HeaderText,
  TotalPrice,
  TotalRanking,
  BuyButton,
  ShoppingCart,
  ShoppingButton,
  Icon,
} from "./Styling";

export const MyCart = () => {
  const coins = useSelector((store) => store.profile.coins);
  const products = useSelector((store) => store.cart.items);
  const [open, setOpen] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [openFail, setOpenFail] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const totalPrice = useSelector((store) =>
    store.cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    ),
  );

  // Calculating total ranking increase
  const totalRanking = useSelector((store) =>
    store.cart.items.reduce(
      (total, item) => total + item.ranking * item.quantity,
      0,
    ),
  );

  const onToggleDialog = () => {
    setOpen(!open);
  };

  // Function for buying items
  // Updating items, coins and ranking
  // Emptying the cart
  const buy = () => {
    if (totalPrice <= coins) {
      new Audio(audio).play();
      dispatch(updateCoins(-totalPrice));
      dispatch(updateItems(products));
      dispatch(updateRanking(totalRanking));
      dispatch(cart.actions.emptyCart());
      setOpen(false);
      setOpenConfirmation(true);
    } else {
      setOpenFail(true);
      setOpen(false);
    }
  };

  const onConfirmed = () => {
    setOpenConfirmation(false);
    history.push("/");
  };

  const onFail = () => {
    setOpenFail(false);
    history.push("/store");
  };

  return (
    <CartWrapper>
      <Dialog open={open} onClose={onToggleDialog}>
        <DialogContainer>
          {products.length > 0 ? (
            <>
              <DialogHeader>
                <HeaderText>Product</HeaderText>
                <HeaderText>Quantity</HeaderText>
                <HeaderText>Price</HeaderText>
              </DialogHeader>
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
              <TotalPrice>Total Price: {totalPrice}$</TotalPrice>
              <TotalRanking>
                Total Ranking: {totalRanking} <Icon />
              </TotalRanking>
              <BuyButton onClick={buy}>Buy</BuyButton>
            </>
          ) : (
            <TotalPrice>Your cart is empty.</TotalPrice>
          )}
        </DialogContainer>
      </Dialog>
      <ShoppingCart>
        <ShoppingButton>
          <Badge badgeContent={products.length} color="secondary" showZero>
            <LocalGroceryStoreIcon
              tabIndex="0"
              aria-label="shoppingcart"
              fontSize="large"
              onClick={onToggleDialog}
            />
          </Badge>
        </ShoppingButton>
      </ShoppingCart>
      <ConfirmationDialogs
        openConfirmation={openConfirmation}
        onConfirmed={onConfirmed}
        openFail={openFail}
        onFail={onFail}
      />
    </CartWrapper>
  );
};
