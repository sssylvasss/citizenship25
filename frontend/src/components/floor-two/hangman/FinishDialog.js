import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";

import { checkWin } from "./Helpers";

import { DialogContainer, Button, DialogText } from "./Styling";

export const FinishDialog = ({
  playAgain,
  open,
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Congratulations! You won! 😃";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Unfortunately you lost. 😕";
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });
  return (
    <Dialog open={open}>
      <DialogContainer>
        <DialogText>{finalMessage}</DialogText>
        <DialogText>{finalMessageRevealWord}</DialogText>
        <Button onClick={playAgain}>Collect badges</Button>
      </DialogContainer>
    </Dialog>
  );
};
