import styled from "styled-components";
import {
  lightTheme,
  blueTheme,
  redTheme,
  grayTheme,
  brownTheme,
} from "../../styledcomponents/StyledTheme";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px 0 0 0;
`;

export const ThemeTitle = styled.p`
  font-size: 12px;
  margin-right: 5px;
  color: ${(props) => props.theme.colors.text};
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Button = styled.button`
  width: 25px;
  height: 25px;
  margin: 0 5px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
    border-color: ${(props) => props.theme.colors.accent};
  }
`;

export const LightButton = styled(Button)`
  background-color: ${lightTheme.colors.primary};
`;

export const BlueButton = styled(Button)`
  background-color: ${blueTheme.colors.primary};
`;

export const RedButton = styled(Button)`
  background-color: ${redTheme.colors.primary};
`;

export const GrayButton = styled(Button)`
  background-color: ${grayTheme.colors.primary};
`;

export const BrownButton = styled(Button)`
  background-color: ${brownTheme.colors.primary};
`;
