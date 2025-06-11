import {
  ProgressContainer,
  ProgressText,
  ProgressBar,
  ProgressFiller,
} from "./Styling";

export const RankingProgress = ({ ranking }) => {
  return (
    <ProgressContainer>
      {ranking && <ProgressText>{ranking}/100</ProgressText>}
      <ProgressBar>
        <ProgressFiller style={{ width: `${ranking}%` }}></ProgressFiller>
      </ProgressBar>
    </ProgressContainer>
  );
};
