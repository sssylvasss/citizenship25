import React from 'react';

import { 
  InfoPage,
  PageTitle,
  TextInfo,
  InfoItem,
  Cutlery,
  Shop,
  GameText } from './Styling';

  export const ThirdInfo = () => {
    return (
      <InfoPage>
      <PageTitle>Coins, Invest & Shop</PageTitle>
        <TextInfo>On the main page you have a section with our currency Space$. 
          There you can choose to exchange your badges for coins at the current
          market value. You can then invest the money in Space$, more info on that
          and how it works can be read there.</TextInfo>
          <InfoItem>
            <Shop />
            <GameText>
              Our Space Shop where you can buy important
              items to have on the ship, owning more items will give you higher ranking.
            </GameText>
          </InfoItem>
          <InfoItem>
            <Cutlery />
            <GameText>
              Our Restaurant. One very important thing as a citizen is 
              to eat so you have a good energy intake. In the restaurant you can buy your food
              and also see how much energy it gives you. If your daily average energy
              goes below 1500 you will get too weak and your ranking will decrease if
              you don't eat soon. 
              You will then see an alert icon on your avatar and in your profile.
            </GameText>
          </InfoItem> 
    </InfoPage>
    )
  };