import React from "react";

import { CollectButton } from "./Styling";

export const ResetButton = ({ resetButton, onClick, buttonText }) => {
  return (
    <CollectButton ref={resetButton} onClick={onClick}>
      {buttonText}
    </CollectButton>
  );
};
