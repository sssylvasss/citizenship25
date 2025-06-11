import BubbleChart from "@mui/icons-material/BubbleChart";

import {
  InfoPage,
  PageTitle,
  TextInfo,
  InfoItem,
  GameText,
  Fish,
  Math,
  Trivia,
  Memory,
} from "./Styling";

export const SecondInfo = () => {
  return (
    <InfoPage>
      <PageTitle>Badges & Games</PageTitle>
      <TextInfo>
        There are five different games where you can collect badges:
      </TextInfo>
      <InfoItem>
        <Fish />
        <GameText>The ships Protein Farm. Catch fishes.</GameText>
      </InfoItem>
      <InfoItem>
        <Math />
        <GameText>
          The ships Classroom for math problems. Different difficulty levels.
        </GameText>
      </InfoItem>
      <InfoItem>
        <Memory />
        <GameText>
          The ships Memory Room. Solve the game and win 10 badges.
        </GameText>
      </InfoItem>
      <InfoItem>
        <Trivia />
        <GameText>
          The ships Trivia Room. True or false questions and different
          difficulty levels.
        </GameText>
      </InfoItem>
      <InfoItem>
        <BubbleChart fontSize="small" />
        <GameText>
          The ships Space Room. Collect points by clicking on the colored balls.
        </GameText>
      </InfoItem>
    </InfoPage>
  );
};
