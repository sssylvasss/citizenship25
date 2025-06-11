import Dialog from "@mui/material/Dialog";

import {
  BigDialogContainer,
  InfoTitle,
  InfoText,
  CloseIconBig,
  List,
  ListItem,
  StartGameButton,
  DialogButton,
  CirclePoint,
  Purple,
  Pink,
  Green,
  Orange,
  Blue,
} from "./Styling";

/* eslint-disable indent */
export const BigDialog = ({
  open,
  titleText,
  onClose,
  text,
  onClick,
  dialogButton,
  disabled,
  gameButton,
  gameLink,
  list,
  itemOne,
  itemTwo,
  itemThree,
  circleList,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <BigDialogContainer>
        <InfoTitle>
          {titleText}
          <CloseIconBig onClick={onClose} />
        </InfoTitle>
        <InfoText>{text}</InfoText>
        {list && (
          <List>
            <ListItem>{itemOne}</ListItem>
            <ListItem>{itemTwo}</ListItem>
            {itemThree && <ListItem>{itemThree}</ListItem>}
          </List>
        )}
        {circleList && (
          <>
            <CirclePoint>
              <Purple></Purple> - 1 point
            </CirclePoint>
            <CirclePoint>
              <Green></Green> - 1 point
            </CirclePoint>
            <CirclePoint>
              <Pink></Pink> - 2 points
            </CirclePoint>
            <CirclePoint>
              <Blue></Blue> - 3 points
            </CirclePoint>
            <CirclePoint>
              <Orange></Orange> - 4 points
            </CirclePoint>
          </>
        )}
        {dialogButton && (
          <DialogButton onClick={onClick} disabled={disabled}>
            {dialogButton}
          </DialogButton>
        )}
        {gameButton && (
          <StartGameButton to={gameLink}>{gameButton}</StartGameButton>
        )}
      </BigDialogContainer>
    </Dialog>
  );
};
