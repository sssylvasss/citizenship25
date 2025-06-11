import { ThemeButtons } from "../../theme/ThemeButtons";
import { UpdatePassword } from "./UpdatePassword";
import { SettingsAvatars } from "./SettingsAvatars";
import {
  SettingsContainer,
  SettingsTitle,
  ChangeTitle,
  CloseIcon,
} from "./Styling";

export const Settings = ({ onClose }) => {
  return (
    <SettingsContainer>
      <SettingsTitle>
        Settings
        <CloseIcon tabIndex="0" onClick={onClose} />
      </SettingsTitle>
      <SettingsAvatars />
      <ChangeTitle>Change your spaceship color:</ChangeTitle>
      <ThemeButtons />
      <UpdatePassword />
    </SettingsContainer>
  );
};
