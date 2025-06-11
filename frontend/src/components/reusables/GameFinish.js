import Dialog from "@mui/material/Dialog";

import { FinishContainer, FinishText, FinishButton } from "./Styling";

export const GameFinish = ({
  open,
  topText,
  score,
  textTwo,
  points,
  textThree,
  bottomText,
  bottomType,
  onClick,
  button,
}) => {
  return (
    <Dialog open={open}>
      <FinishContainer>
        {topText && (
          <FinishText>
            {topText} {score} {textTwo} {points} {textThree}
          </FinishText>
        )}
        {bottomText && (
          <FinishText>
            {bottomText} {bottomType}
          </FinishText>
        )}
        {button && <FinishButton onClick={onClick}>{button}</FinishButton>}
      </FinishContainer>
    </Dialog>
  );
};
