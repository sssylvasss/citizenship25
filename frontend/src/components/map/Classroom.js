import React, { useState } from "react";

import { BigDialog } from "../reusables/BigDialog";
import { RoomClassroom, MathIcon } from "./Styling";

export const Classroom = () => {
  const [openGame, setOpenGame] = useState(false);

  const onToggleGameDialog = () => {
    setOpenGame(!openGame);
  };

  return (
    <>
      <RoomClassroom
        tabIndex="0"
        aria-label="Classroom"
        onClick={onToggleGameDialog}
      >
        <MathIcon />
      </RoomClassroom>
      <BigDialog
        open={openGame}
        onClose={onToggleGameDialog}
        titleText="Classroom"
        text="In the classroom you can get badges by solving mathematical problems. You can choose between three levels:"
        list
        itemOne="BEGINNER: You will have 40s and the numbers are low. This of course reflects on how many badges you can make."
        itemTwo="AVERAGE: Everything is pretty average here."
        itemThree="EXPERT: For the pro citizen! Higher numbers and short time, but you will get DOUBLE the badges."
        gameLink="/classroom"
        gameButton="Lets start"
      />
    </>
  );
};
