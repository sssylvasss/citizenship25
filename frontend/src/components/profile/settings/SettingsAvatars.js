import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { updateAvatar } from "../../../reducers/profile";

import {
  ButtonContainer,
  Container,
  ChangeTitle,
  AvatarLabel,
  Radio,
  Avatar,
  AvatarContainer,
  ConfirmText,
  UpdateButton,
} from "./Styling";

export const SettingsAvatars = () => {
  const [avatar, setAvatar] = useState("");
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const avatars = ["woman", "man2", "hacker", "woman3", "woman2", "man"];

  // Updating avatar and settings success message
  const handleAvatarUpdate = (e) => {
    e.preventDefault();
    dispatch(updateAvatar(avatar));
    setSuccess(true);
  };

  return (
    <Container onSubmit={handleAvatarUpdate}>
      <ChangeTitle>Change your avatar: </ChangeTitle>
      <AvatarContainer>
        {avatars.map((avatar) => (
          <ButtonContainer>
            <AvatarLabel tabIndex="0" htmlFor={avatar} aria-label={avatar}>
              <Radio
                type="radio"
                name="avatar"
                id={avatar}
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                required
              />
              <Avatar src={require(`../../../assets/${avatar}.png`)} />
            </AvatarLabel>
          </ButtonContainer>
        ))}
      </AvatarContainer>
      <ConfirmText success={success}>
        {success ? "Avatar successfully changed!" : ""}
      </ConfirmText>
      <UpdateButton type="submit">Change avatar</UpdateButton>
    </Container>
  );
};
