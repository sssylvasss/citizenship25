import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateBadges, updateRanking } from "../../reducers/profile";
import { BigDialog } from "../reusables/BigDialog";
import { SmallDialog } from "../reusables/SmallDialog";
import { RoomBedroom, BedIcon } from "./Styling";

export const Bedroom = () => {
  const [openBedroom, setOpenBedroom] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [success, setSuccess] = useState(false);
  const badges = useSelector((store) => store.profile.badges);
  const delay = 1000 * 60 * 30;

  const dispatch = useDispatch();

  const onToggleBedroomDialog = () => {
    setOpenBedroom(!openBedroom);
  };

  // Check if more than 20 badges
  // Different return messages
  // Disable button for 30 min after sleep
  const onClickSleep = () => {
    if (badges >= 20) {
      dispatch(updateBadges(-20));
      dispatch(updateRanking(0.2));
      setOpenConfirm(true);
      setSuccess(true);
      setDisabled(true);
      setTimeout(() => {
        setOpenConfirm(false);
        setOpenBedroom(false);
      }, 2000);
      setTimeout(() => {
        setDisabled(false);
      }, delay);
    } else {
      setOpenConfirm(true);
      setSuccess(false);
      setTimeout(() => {
        setOpenConfirm(false);
        setOpenBedroom(false);
      }, 2000);
    }
  };

  return (
    <>
      <RoomBedroom
        tabIndex="0"
        aria-label="Bedroom"
        onClick={onToggleBedroomDialog}
      >
        <BedIcon />
      </RoomBedroom>
      <BigDialog
        open={openBedroom}
        onClose={onToggleBedroomDialog}
        titleText="Get some rest!"
        text="As a citizen on this ship, we like it when you work hard. That is why it
        is important that you also sleep a little bit sometimes. You will lose 20
        badges but will gain 0.2 ranking! But you can not sleep too often so we lock the room afterwards."
        onClick={onClickSleep}
        disabled={disabled}
        dialogButton="Sleep!"
      />
      <SmallDialog
        open={openConfirm}
        headerText="Citizen Bedroom"
        text={
          success
            ? "Good morning! Hope you are rested!"
            : "You do not have enough badges to deserve some rest!"
        }
      />
    </>
  );
};
