import React from "react";

import { FigureContainer } from './Styling';

export const Figure = ({ wrongLetters }) => {
  const errors = wrongLetters.length;

  return (
    <FigureContainer height="250" width="200">
      {/* <!-- Rod --> */}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="10" y1="230" x2="110" y2="230" />

      {/* <!-- Head --> */}
      {errors > 0 && <circle cx="140" cy="70" r="20" />}
      {errors > 1 && <circle cx="144" cy="65" r="1" />}
      {errors > 2 && <circle cx="135" cy="65" r="1" />}
      {errors > 3 && <circle cx="140" cy="75" r="2" />}
      {/* <!-- Body --> */}
      {errors > 4 && <line x1="140" y1="90" x2="140" y2="150" />}
      {/* <!-- Arms --> */}
      {errors > 5 && <line x1="140" y1="120" x2="120" y2="100" />}
      {errors > 6 && <line x1="140" y1="120" x2="160" y2="100" />}
      {/* <!-- Legs --> */}
      {errors > 7 && <line x1="140" y1="150" x2="120" y2="180" />}
      {errors > 8 && <line x1="140" y1="150" x2="160" y2="180" />}
    </FigureContainer>
  );
};