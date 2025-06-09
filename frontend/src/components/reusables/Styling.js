import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Small Dialog
export const DialogContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
	max-width: 300px;
	background-color: ${props => props.theme.colors.background};
	border: 2px solid ${(props) => props.theme.colors.secondary};
	color: ${props => props.theme.colors.text};
`;

export const DialogHeader = styled.div`
  position: absolute;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 4px 6px;
  @media (min-width: 768px) {
    padding: 5px 7px;
  }
`;

export const HeaderText = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  margin: 10px 0;
  padding: 0;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const DialogText = styled.p`
	font-size: 16px;
	text-align: center;
`;

export const CloseIcon = styled(FaTimes)`
	font-size: 15px;
	cursor: pointer;
  @media (min-width: 768px) {
    font-size: 16px;
  }
	:hover, :focus {
		color: ${props => props.theme.colors.secondary};
	}
`;

export const ButtonBox = styled.div`
	display: flex;
	margin-top: 5px;
`;

export const SellButton = styled.button`
	background-color: ${props => props.theme.colors.primary};
	border: 2px solid ${(props) => props.theme.colors.secondary};
	color: ${props => props.theme.colors.text};
	font-size: 14px;
	margin: 7px 7px 0 0;
	padding: 5px;
	width: fit-content;
	:hover, :focus {
		background-color: ${props => props.theme.colors.secondary};
	}
`;

export const ConfirmedButton = styled.button`
	background-color: ${(props) => props.theme.colors.primary};
	border: 2px solid ${(props) => props.theme.colors.secondary};
	font-size: 14px;
	padding: 8px;
  margin: 7px;
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.text};
	:hover,
	:focus {
		background-color: ${(props) => props.theme.colors.secondary};
	}
`;

export const GameButton = styled(ConfirmedButton)`
	margin: 20px 0 0 0;
	border: 2px solid ${(props) => props.theme.colors.hover};
	@media (hover:hover) {
		&:hover {
			background-color: ${(props) => props.theme.colors.hover};
		}
	}
`;

// Big Dialog
export const BigDialogContainer = styled.div`
	background-color: ${(props) => props.theme.colors.background};
	border: 2px solid ${(props) => props.theme.colors.primary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 15px;
	min-width: 280px;
	max-width: 300px;
	color: ${(props) => props.theme.colors.text};
	@media (min-width: 500px) {
		max-width: 450px;
		padding: 20px 20px 20px 15px;
	}
`;

export const InfoTitle = styled.h2`
	font-size: 24px;
	text-transform: uppercase;
	display: flex;
  align-items: center;
  justify-content: space-between;
	margin: 0 0 5px 0;
	padding: 0 0 5px 5px;
	border-bottom: 2px solid ${(props) => props.theme.colors.primary};
`;

export const CloseIconBig = styled(FaTimes)`
font-size: 16px;
cursor: pointer;
position: absolute;
top: 10px;
right: 10px;
outline: none;
:hover {
	transform: scale(1.2);
}
:focus {
	color: ${props => props.theme.colors.primary}
}
@media (min-width: 768px) {
	font-size: 20px;
	top: 12px;
	right: 12px;
}
`;

export const InfoText = styled.p`
	font-size: 14px;
	margin: 5px 0;
	padding: 0 0 0 5px;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

export const StartGameButton = styled(Link)`
	padding: 10px 15px;
	margin-top: 15px;
	background-color: ${(props) => props.theme.colors.primary};
	border: 2px solid ${(props) => props.theme.colors.hover};
	color: ${(props) => props.theme.colors.text};
	font-size: 16px;
	width: fit-content;
	text-transform: uppercase;
	font-family: 'Trispace';
	cursor: pointer;
	:hover {
		background-color: ${(props) => props.theme.colors.hover};
	}
`;

export const List = styled.ul`
	list-style-type: square;
	padding: 0 20px;
	margin: 5px 0 0 0;
`;

export const ListItem = styled.li`
	font-size: 12px;
	margin: 5px 0;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

export const CirclePoint = styled.div`
	display: flex;
	align-items: center;
	font-size: 14px;
	padding: 3px;
`;

export const Circle = styled.div`
	width: 16px;
	height: 16px;
	border-radius: 50%;
	margin: 0 5px 0 3px;
	@media (min-width: 768px) {
		width: 20px;
		height: 20px;
	}
`;

export const Orange = styled(Circle)`
	background-color: #f58634;
`;

export const Blue = styled(Circle)`
	background-color: #1a90ff;
`;

export const Purple = styled(Circle)`
	background-color: #b590ca;
`;

export const Pink = styled(Circle)`
	background-color: #ce1f6a;
`;

export const Green = styled(Circle)`
	background-color: #29bb89;
`;

export const DialogButton = styled.button`
	padding: 8px;
	margin: 10px 5px;
	background-color: transparent;
	border: 2px solid ${(props) => props.theme.colors.accent};
	font-size: 14px;
	font-family: 'Trispace', serif;
	text-transform: uppercase;
	:hover {
		opacity: 0.8;
	}
`;

// Game Title
export const GameTitleText = styled.h1`
	position: absolute;
	top: 30px;
	left: 20px;
	text-transform: uppercase;
	@media (min-width: 768px) {
		top: 10px;
	}
`;

// GameScore
export const ScoreText = styled(GameTitleText)`
	font-size: 20px;
	top: 75px;
	left: 22px;
  @media ( min-width: 768px) {
    top: 60px;
  }
`;

export const CounterText = styled(ScoreText)`
	top: 100px;
	left: 22px;
  @media ( min-width: 768px) {
    top: 85px;
  }
`;

// Game Finish
export const FinishContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	max-width: 400px;
	background-color: ${(props) => props.theme.colors.background};
	border: 2px solid ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.text};
`;

export const FinishText = styled.p`
	font-size: 16px;
	text-align: center;
	margin: 5px 0 0 0;
`;

export const FinishButton = styled.button`
	padding: 10px 15px;
	margin-top: 20px;
	background-color: ${(props) => props.theme.colors.primary};
	border: 2px solid ${(props) => props.theme.colors.hover};
	color: ${(props) => props.theme.colors.text};
	font-size: 16px;
	width: fit-content;
	text-transform: uppercase;
	font-family: 'Trispace';
	cursor: pointer;
	:hover {
		background-color: ${(props) => props.theme.colors.hover};
	}
`;