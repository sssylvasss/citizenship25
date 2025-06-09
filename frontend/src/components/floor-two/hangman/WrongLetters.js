import React from "react";

import { 
  WrongLettersContainer, 
  WrongTitle,
  LettersContainer, 
  WrongText } from "./Styling";

export const WrongLetters = ({ wrongLetters }) => {
  return (
    <WrongLettersContainer>
      {wrongLetters.length > 0 && <WrongTitle>Wrong</WrongTitle>}
      <LettersContainer>
        {wrongLetters.map((letter, i) => 
          <WrongText key={i}>{letter}</WrongText>)
          .reduce((prev, curr) => (prev === null ? [curr] : [prev, curr]), null)}
      </LettersContainer>
    </WrongLettersContainer>
  );
};