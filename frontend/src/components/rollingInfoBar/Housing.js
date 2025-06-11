import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  HousingText,
  Button,
  DialogContainer,
  HouseContainer,
  HouseTitle,
  HouseTextContainer,
  HouseText,
  ButtonContainer,
  BuyButton,
  HouseImage,
  Title,
  PriceContainer,
  CloseIcon,
  BuyDialog,
} from "./Styling";

export const Housing = () => {
  const [open, setOpen] = useState(false);
  const [openBuy, setOpenBuy] = useState(false);
  const housing = useSelector((store) => store.housing);

  const onToggleDialog = () => {
    setOpen(!open);
  };

  const onToggleBuy = () => {
    setOpenBuy(!openBuy);
  };

  return (
    <>
      <HousingText>
        Housing:
        <Button onClick={onToggleDialog}>See latest</Button>
      </HousingText>
      <Dialog open={open} onClose={onToggleDialog}>
        <DialogContainer>
          <CloseIcon onClick={onToggleDialog} />
          <HouseTitle>LET YOUR DREAM COME TRUE</HouseTitle>
          <Carousel showThumbs={false} autoPlay="true" infiniteLoop="true">
            {housing.map((house) => (
              <HouseContainer key={house.id}>
                <HouseImage
                  src={require(`./assets/${house.image}`)}
                  alt={house.title}
                />
                <HouseTextContainer>
                  <Title>{house.title}</Title>
                  <HouseText>{house.description}</HouseText>
                  <PriceContainer>
                    <HouseText> Price from: {house.price} $</HouseText>
                  </PriceContainer>
                  <ButtonContainer>
                    <BuyButton onClick={onToggleBuy}>Buy House</BuyButton>
                  </ButtonContainer>
                </HouseTextContainer>
              </HouseContainer>
            ))}
          </Carousel>
        </DialogContainer>
      </Dialog>
      <Dialog open={openBuy} onClose={onToggleBuy}>
        <BuyDialog>
          <CloseIcon onClick={onToggleBuy} />
          You have not nearly enough money to afford this!
        </BuyDialog>
      </Dialog>
    </>
  );
};
