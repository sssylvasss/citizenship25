import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

// Settings
export const SettingsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: 2px solid ${(props) => props.theme.colors.secondary};
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export const SettingsTitle = styled.h2`
  font-size: 20px;
  padding: 0 3px 5px 3px;
  display: flex;
  margin: 0 0 5px 0;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

// Avatars
export const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ChangeTitle = styled.p`
  font-size: 14px;
  margin: 10px 0 5px 0;
  color: ${(props) => props.theme.colors.text};
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 0;
`;

export const AvatarContainer = styled(ButtonContainer)``;

export const AvatarLabel = styled.label`
  display: flex;
  align-items: center;
  border-radius: 50%;
  outline: none;
  background-color: ${(props) => props.theme.colors.secondary};
  border: 2px solid transparent;
  width: 100%;
  height: 100%;
  position: relative;
  margin-right: 10px;
  z-index: 1;
  :hover,
  :focus {
    border: 2px solid ${(props) => props.theme.colors.hover};
  }
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  padding: 2px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  @media (min-width: 400px) {
    width: 36px;
    height: 36px;
  }
  @media (min-width: 768px) {
    width: 46px;
    height: 46px;
    padding: 3px;
  }
`;

export const Radio = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  top: 0;
  left: 0;
  position: absolute;
  padding: 0;
  margin: 0;
  outline: none;
  &:checked ~ ${Avatar} {
    border: 2px solid ${(props) => props.theme.colors.hover};
  }
`;

export const UpdateButton = styled.button`
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
  font-size: 14px;
  margin-top: 10px;
  padding: 5px;
  width: fit-content;
  :hover,
  :focus {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

// Password
export const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  position: relative;
`;

export const Input = styled.input`
  padding: 6px;
  outline: none;
  border-bottom: 3px solid ${(props) => props.theme.colors.primary};
  border-left: none;
  border-top: none;
  border-right: none;
  background-color: transparent;
  font-size: 12px;
  color: ${(props) => props.theme.colors.text};
  margin: 5px 5px 5px 0;
  width: 160px;
  font-family: "Trispace";
  :focus {
    background-color: ${(props) => props.theme.colors.primary};
  }
  ::placeholder {
    text-transform: uppercase;
  }
`;

export const ConfirmInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ConfirmText = styled.p`
  font-size: 12px;
  margin: 2px 0 0 0;
  font-family: "Open Sans", serif;
  ${(props) => (props.success ? ` color: #6DD704; ` : ` color: #e83715; `)};
`;

export const EyeOne = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 20px;
  position: absolute;
  right: 32%;
  bottom: 0;
  :hover,
  :focus {
    color: ${(props) => props.theme.colors.primary};
  }
  :focus {
    color: ${(props) => props.theme.colors.hover};
  }
  @media (min-width: 768px) {
    right: 47%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;
