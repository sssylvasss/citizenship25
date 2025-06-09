import React from 'react';

import { 
  InfoPage,
  PageTitle,
  TextInfo } from './Styling';

  export const FourthInfo = () => {
    return (
      <InfoPage>
        <PageTitle>Leaderboard</PageTitle>
        <TextInfo>On the main page you also have the Citizens Leaderboard. You of course
          want to be on top of the leaderboard. It is automatically sorted on
          the highest ranking. But if you click the titles you can also sort on
          most badges, coins and days on ship. Also important things that defines you as a citizen.
          You can click on the citizens names and see their profiles too!
        </TextInfo>
        <PageTitle>Game Highscores</PageTitle>
        <TextInfo>
          On the main page you can also find a Game Highscore Board. Here
          you can see the citizens with the highest scores in Space Ball,
          the ones with the best Math skills and the ones that has caught the most fish.
          Just as in the leaderboard you can here click the different icons and choose to sort
          on the highscores for the specific game. The default sorting is on Space Ball.
        </TextInfo>
      </InfoPage>
    )
  };