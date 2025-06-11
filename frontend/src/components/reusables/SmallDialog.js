import Dialog from "@mui/material/Dialog";

import {
  DialogContainer,
  DialogHeader,
  HeaderText,
  Text,
  ButtonBox,
  SellButton,
  CloseIcon,
  ConfirmedButton,
} from "./Styling";

export const SmallDialog = ({
  open,
  headerText,
  onClose,
  text,
  buttonBox,
  sellButton,
  confirmButton,
  onClick,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContainer>
        <DialogHeader>
          <HeaderText>{headerText}</HeaderText>
          <CloseIcon onClick={onClose} />
        </DialogHeader>
        <Text>{text}</Text>
        {buttonBox && (
          <ButtonBox>
            <SellButton>{sellButton}</SellButton>
          </ButtonBox>
        )}
        {confirmButton && (
          <ConfirmedButton onClick={onClick}>{confirmButton}</ConfirmedButton>
        )}
      </DialogContainer>
    </Dialog>
  );
};
