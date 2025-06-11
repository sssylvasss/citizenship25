import { useDispatch } from "react-redux";
import { Tooltip } from "@mui/material";

import { themes } from "../../reducers/themes";
import {
  redTheme,
  lightTheme,
  blueTheme,
  grayTheme,
  brownTheme,
} from "../../styledcomponents/StyledTheme";
import {
  ButtonContainer,
  ThemeTitle,
  Buttons,
  LightButton,
  BlueButton,
  RedButton,
  GrayButton,
  BrownButton,
} from "./Styling";

export const ThemeButtons = ({ text }) => {
  const dispatch = useDispatch();

  return (
    <ButtonContainer>
      <ThemeTitle>{text} </ThemeTitle>
      <Buttons>
        <Tooltip title="Light">
          <LightButton
            onClick={() => dispatch(themes.actions.changeTheme(lightTheme))}
          ></LightButton>
        </Tooltip>
        <Tooltip title="Blue">
          <BlueButton
            onClick={() => dispatch(themes.actions.changeTheme(blueTheme))}
          ></BlueButton>
        </Tooltip>
        <Tooltip title="Red">
          <RedButton
            onClick={() => dispatch(themes.actions.changeTheme(redTheme))}
          ></RedButton>
        </Tooltip>
        <Tooltip title="Gray">
          <GrayButton
            onClick={() => dispatch(themes.actions.changeTheme(grayTheme))}
          ></GrayButton>
        </Tooltip>
        <Tooltip title="Brown">
          <BrownButton
            onClick={() => dispatch(themes.actions.changeTheme(brownTheme))}
          ></BrownButton>
        </Tooltip>
      </Buttons>
    </ButtonContainer>
  );
};
