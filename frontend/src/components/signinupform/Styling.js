import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// For Sign in and up pages
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  margin: 0;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
  font-size: 24px;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.secondary};
  border: 2px solid transparent;
  width: 100%;
  height: 100%;
  position: relative;
  margin-right: 10px;
  z-index: 1;
  :hover {
    border: 2px solid ${(props) => props.theme.hover};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 250px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const Input = styled.input`
  padding: 7px;
  margin: 0;
  width: 100%;
  border-bottom: 3px solid ${(props) => props.theme.colors.primary};
  border-top: none;
  border-right: none;
  border-left: none;
  color: ${(props) => props.theme.colors.text};
  outline: none;
  font-size: 14px;
  font-family: "Trispace", serif;
  background-color: ${(props) => props.theme.colors.primary};
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  margin: 20px 0;
  width: 250px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
  font-size: 14px;
  text-transform: uppercase;
  font-family: "Trispace", serif;
  border: 2px solid ${(props) => props.theme.colors.accent};
  :hover {
    opacity: 0.8;
  }
  @media (min-width: 768px) {
    width: 300px;
    font-size: 16px;
  }
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const TextButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0 0 0 5px;
  font-size: 14px;
  font-family: "Trispace", serif;
  color: ${(props) => props.theme.colors.secondary};
  :hover {
    color: ${(props) => props.theme.colors.primary};
  }
  :focus {
    color: ${(props) => props.theme.colors.accent};
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 14px;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ErrorText = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 14px;
  margin: 0;
  padding: 0;
  :hover {
    color: ${(props) => props.theme.colors.secondary};
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

// Avatar
export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin: 10px auto;
  padding: 10px;
  flex-wrap: wrap;
  gap: 10px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  max-width: 300px;
  margin: 10px 0;
`;

export const AvatarButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  border: none;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const AvatarImage = styled.img`
  height: 50px;
  border: 2px solid ${(props) => props.theme.colors.accent};
  padding: 2px;
`;

export const SelectedAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const SelectedImage = styled.img`
  height: 70px;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  padding: 5px;
`;

export const SelectedText = styled.p`
  margin: 5px 0;
  padding: 0;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

// Dialog
export const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 300px;
  border: 2px solid ${(props) => props.theme.colors.accent};
`;

export const DialogText = styled.p`
  font-size: 16px;
  text-align: center;
`;

export const DialogButton = styled.button`
  padding: 8px;
  margin: 10px 5px;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.accent};
  font-size: 14px;
  font-family: "Trispace", serif;
  text-transform: uppercase;
  :hover {
    opacity: 0.8;
  }
`;

// TextInput for Sign In
// With animation
const input = keyframes`
  0% { opacity: 0 }
  80% { opacity: 0 }
  100% { opacity: 1 }
`;

export const InputSignIn = styled(Input)`
  animation: ${input} 3.5s linear;
`;

// SubmitButton for Sign In
export const ButtonSignIn = styled(Button)`
  animation: ${input} 3.7s linear;
`;

// ChooseText
export const ChooseText = styled.p`
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
  font-size: 14px;
  margin: 15px 0 5px 0;
  @media (max-width: 320px) {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    margin: 20px 0 5px 0;
  }
`;

// ChangeLogin for Sign Up
export const ChangeText = styled.p`
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 25px;
  @media (max-width: 320px) {
    font-size: 12px;
    margin-bottom: 20px;
  }
`;

export const ChangeLink = styled(Link)`
  text-decoration: underline;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  margin-left: 7px;
  :hover,
  :focus {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const ChangeTextSignIn = styled(ChangeText)`
  animation: ${input} 3.7s linear;
`;

// Start Button
export const StartButton = styled.button`
  padding: 20px 40px;
  font-size: 24px;
  color: white;
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.8);
  cursor: pointer;
  font-family: "Trispace", serif;
  text-transform: uppercase;
  transition: all 0.5s ease;
  letter-spacing: 3px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  z-index: 2;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    transform: scale(1.05);
    border-color: white;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);

    &:before {
      left: 100%;
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
  }
`;

// Title Animation
export const AnimationTitle = styled(Title)`
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const letterTop = keyframes`
  from { transform: translateY(-800px) }
  to { transform: translateY(0px) }
`;

const letterBottom = keyframes`
  from { transform: translateY(800px) }
  to { transform: translateY(0px) }
`;

const letterRight = keyframes`
  from { transform: translateX(800px) }
  to { transform: translateX(0px) }
`;

const letterLeft = keyframes`
  from { transform: translateX(-800px) }
  to { transform: translateX(0px) }
`;

export const Letter = styled.p`
  margin: 0;
  padding: 0;
  display: inline-block;
  &:nth-of-type(8) {
    margin-left: 15px;
  }
  &:nth-of-type(1) {
    animation: ${letterTop} 2.1s linear;
  }
  &:nth-of-type(2) {
    animation: ${letterRight} 2.1s linear;
  }
  &:nth-of-type(3) {
    animation: ${letterLeft} 2.1s linear;
  }
  &:nth-of-type(4) {
    animation: ${letterBottom} 2.1s linear;
  }
  &:nth-of-type(5) {
    animation: ${letterTop} 2.3s linear;
  }
  &:nth-of-type(6) {
    animation: ${letterRight} 2.3s linear;
  }
  &:nth-of-type(7) {
    animation: ${letterLeft} 2.5s linear;
  }
  &:nth-of-type(8) {
    animation: ${letterBottom} 2.5s linear;
  }
  &:nth-of-type(9) {
    animation: ${letterTop} 2.5s linear;
  }
  &:nth-of-type(10) {
    animation: ${letterRight} 2.5s linear;
  }
  &:nth-of-type(11) {
    animation: ${letterBottom} 2.5s linear;
  }
`;

// Avatars
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  position: relative;
`;

export const AvatarLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.background};
  border: 2px solid transparent;
  width: fit-content;
  height: fit-content;
  position: relative;
  margin: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.1);
      border: 2px solid ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const Avatar = styled.img`
  width: 45px;
  height: 45px;
  padding: 3px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: 3px solid ${(props) => props.theme.colors.primary};
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => props.theme.colors.background};

  @media (max-width: 320px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
    padding: 4px;
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
    border: 3px solid ${(props) => props.theme.colors.accent};
    transform: scale(1.1);
    box-shadow: 0 0 10px ${(props) => props.theme.colors.accent}40;
  }

  &:focus-visible ~ ${Avatar} {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.accent};
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

export const EyeButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  cursor: pointer;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
  :hover {
    color: ${(props) => props.theme.colors.secondary};
  }
  :focus {
    color: ${(props) => props.theme.colors.accent};
  }
`;

export const EyeButtonSignUp = styled(EyeButton)`
  top: 50%;
`;

export const ErrorMessageSignUp = styled(ErrorMessage)`
  margin: 5px 0;
  color: #e83715;
`;

export const StartScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow: hidden;
`;

const twinkleAnimation = keyframes`
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
`;

export const Star = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: #FFF;
  border-radius: 50%;
  left: ${props => props.left};
  top: ${props => props.top};
  animation: ${twinkleAnimation} ${props => props.animationDuration} ease-in-out infinite;
  animation-delay: ${props => props.animationDelay};
  box-shadow: 0 0 3px #FFF;
`;

const shootingStarAnimation = keyframes`
  0% {
    transform: rotate(315deg) translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(315deg) translateX(-1000px);
    opacity: 0;
  }
`;

const shootingStarTailAnimation = keyframes`
  0% {
    width: 0;
  }
  30% {
    width: 100px;
  }
  100% {
    width: 0;
  }
`;

export const ShootingStar = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: ${shootingStarAnimation} ${props => props.duration || '3s'} linear infinite;
  animation-delay: ${props => props.delay || '0s'};
  left: ${props => props.left || '50%'};
  top: ${props => props.top || '50%'};
  opacity: 0;

  &:before {
    content: '';
    position: absolute;
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, transparent, white);
    transform: translateX(0);
    border-radius: 100%;
    animation: ${shootingStarTailAnimation} ${props => props.duration || '3s'} linear infinite;
    animation-delay: ${props => props.delay || '0s'};
  }
`;
