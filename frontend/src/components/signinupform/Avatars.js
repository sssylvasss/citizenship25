import { ButtonContainer, AvatarLabel, Radio, Avatar } from "./Styling";

export const Avatars = ({ avatar, onChange, checked, image }) => {
  return (
    <ButtonContainer>
      <AvatarLabel htmlFor={avatar} aria-label={avatar}>
        <Radio
          type="radio"
          name="avatar"
          id={avatar}
          value={avatar}
          onChange={onChange}
          checked={checked}
          required
        />
        <Avatar src={image} />
      </AvatarLabel>
    </ButtonContainer>
  );
};
