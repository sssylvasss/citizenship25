import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// For Sign in and up pages
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.colors.background};
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
  color: ${props => props.theme.colors.text};
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
  background-color: ${props => props.theme.secondary};
  border: 2px solid transparent;
  width: 100%;
  height: 100%;
  position: relative;
  margin-right: 10px;
  z-index: 1; 
  :hover {
    border: 2px solid ${props => props.theme.hover};
  }
`;

export const Input = styled.input`
  padding: 7px;
  margin: 0;
  width: 250px;
  border-bottom: 3px solid ${props => props.theme.colors.primary};
  border-top: none;
  border-right: none;
  border-left: none;
  color: ${props => props.theme.colors.text};
  outline: none;
  font-size: 14px;
  font-family: 'Trispace', serif;
  background-color: ${props => props.theme.colors.primary};
  @media (min-width: 768px) {
    width: 300px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  margin: 20px 0;
  width: 250px;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  text-transform: uppercase;
  font-family: 'Trispace', serif;
  border: 2px solid ${props => props.theme.colors.accent};
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
  font-family: 'Trispace', serif;
  color: ${props => props.theme.colors.secondary};
  :hover {
    color: ${props => props.theme.colors.primary};
  }
  :focus {
    color: ${props => props.theme.colors.accent};
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ErrorText = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  margin: 0;
  padding: 0;
  :hover {
    color: ${props => props.theme.colors.secondary};
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
  margin: 10px 0;
  padding: 5px 0 0 0;
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
  background-color: ${props => props.theme.colors.secondary};
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
  border: 2px solid ${props => props.theme.colors.accent};
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
  border: 2px solid ${props => props.theme.colors.secondary};
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
  border: 2px solid ${props => props.theme.colors.accent};
`;

export const DialogText = styled.p`
  font-size: 16px;
  text-align: center;
`;

export const DialogButton = styled.button`
  padding: 8px;
  margin: 10px 5px;
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.accent};
  font-size: 14px;
  font-family: 'Trispace', serif;
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
  color: ${props => props.theme.colors.text};
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
  color: ${props => props.theme.colors.text};
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
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  margin-left: 7px;
  :hover, :focus {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const ChangeTextSignIn = styled(ChangeText)`
  animation: ${input} 3.7s linear;
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
  padding: 5px 0 0 0;
`;

export const AvatarLabel = styled.label`
  display: flex;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.theme.secondary};
  border: 2px solid transparent;
  width: 100%;
  height: 100%;
  position: relative;
  margin-right: 10px;
  z-index: 1; 
  :hover {
    border: 2px solid ${props => props.theme.hover};
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  padding: 2px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: 2px solid ${props => props.theme.secondary};
  @media (max-width: 320px) {
    width: 34px;
    height: 34px;
  }
  @media (min-width: 768px) {
    width: 64px;
    height: 64px;
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
    border: 2px solid ${props => props.theme.hover};
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`;

export const EyeButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  cursor: pointer;
  :hover {
    color: ${props => props.theme.colors.secondary};
  }
  :focus {
    color: ${props => props.theme.colors.accent};
  }
`;

export const EyeButtonSignUp = styled(EyeButton)`
  right: 10px;
  top: 185px;
  @media (min-width: 768px) {
    top: 195px;
  }
`;

export const ErrorMessageSignUp = styled(ErrorMessage)`
  margin: 5px 0;
  color: #e83715;
`;