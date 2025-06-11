import Dialog from "@mui/material/Dialog";

import { DialogContainer, FinishButton, DialogText } from "./Styling";

export const FinishDialog = ({ handleCollect, open, text, status }) => {
  return (
    <Dialog open={open}>
      <DialogContainer>
        <DialogText>{text}</DialogText>
        <FinishButton onClick={handleCollect}>{status}</FinishButton>
      </DialogContainer>
    </Dialog>
  );
};
