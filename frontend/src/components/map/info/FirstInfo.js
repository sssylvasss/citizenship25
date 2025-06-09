import React from 'react';

import { 
  InfoPage,
  PageTitle,
  TextInfo,
BottomText,
EndText,
EndTextName,
Email } from './Styling';

  export const FirstInfo = () => {
    return (
      <InfoPage>
      <PageTitle>Dear Citizen,</PageTitle>
        <TextInfo>We're glad to have you on onboard our space ship. There are
          many years left to our destination so it's important that you know how life
          on the ship works. The most important part of being a citizen is the ranking. 
          You can increase your ranking when you purchase items in the shop, 
          make a successful investment, sleep or workout. To get there you need to
          collect badges and exchange them for coins.
        </TextInfo>
        <TextInfo>
          The avatar in the corner gives you access to your profile where you can 
          see your ranking, badges, coins, energy, items you own and your 
          investments. There is also a settings page where you can change your avatar, your password and
          color your spaceship.
        </TextInfo>
        <TextInfo>
          Next to your profile we have our Citizen Messageboard, where everyone can make a post. 
        </TextInfo>
        <BottomText>
          <EndText>Your commanders,</EndText>
          <EndTextName>Ylva Landoff Lindberg & Jessika Hage</EndTextName>
          <Email 
            href='mailto:commander@citizenship.se' 
            target="_blank" 
            rel="noopener noreferrer">commander@citizenship.se
          </Email>
        </BottomText>
    </InfoPage>
    )
  };