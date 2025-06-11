import React, { useState } from "react";

import { BigDialog } from "../reusables/BigDialog";
import { RoomMemory, MemoryIcon } from "./Styling";

export const Memory = () => {
  const [openGame, setOpenGame] = useState(false);

  const onToggleGameDialog = () => {
    setOpenGame(!openGame);
  };

  return (
    <>
      <RoomMemory tabIndex="0" aria-label="Memory" onClick={onToggleGameDialog}>
        <MemoryIcon />
      </RoomMemory>
      <BigDialog
        open={openGame}
        onClose={onToggleGameDialog}
        titleText="Memory"
        text="In here you practice your memory skills. If you solve it with 24 or less flips you will
        get 20 badges otherwise you will get 10 badges."
        gameLink="/memorygame"
        gameButton="Lets start"
      />
    </>
  );
};
