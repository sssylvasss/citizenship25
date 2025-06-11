import React from "react";

import { Letter, Words } from "./Styling";

export const Word = ({ selectedWord, correctLetters }) => {
  return (
    <Words>
      {selectedWord.split("").map((letter, i) => {
        return (
          <Letter key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </Letter>
        );
      })}
    </Words>
  );
};
