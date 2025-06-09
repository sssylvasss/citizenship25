import styled, { keyframes } from 'styled-components';
import { 
	FaArrowUp, 
	FaArrowDown, 
	FaExclamationTriangle, 
	FaTimes, 
	FaInfoCircle } from 'react-icons/fa';

// Profile Stats
export const ImageNameContainer = styled.div`
	display: flex;
	align-items: center;
  justify-content: center;
  flex-direction: column;
	width: 100%;
  padding: 5px;
  margin: 0 10px;
	border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
`;

export const ProfileAvatar = styled.img`
	width: 60px;
	height: 60px;
	padding: 2px;
	border-radius: 50%;
	border: 1px solid ${(props) => props.theme.colors.primary};
	background-color: ${(props) => props.theme.colors.secondary};
	margin: 0 0 0 6px;
	@media (min-width: 768px) {
		width: 120px;
		height: 120px;
		padding: 4px;
	}
`;

export const Username = styled.h3`
	font-size: 14px;
	font-weight: bold;
	margin: 7px 0 0 3px;
	color: ${(props) => props.theme.colors.text};
	text-transform: uppercase;
	@media (min-width: 768px) {
		font-size: 16px;
	}
`;

export const StatusContainer = styled.div`
	display: flex;
  justify-content: center;
  align-items: center;
	width: 100%;
`;

export const BadgesText = styled.div`
	display: flex;
	align-items: center;
	font-size: 12px;
  padding: 15px 15px;
	position: absolute;
	top: 0;
	left: 0;
	color: ${(props) => props.theme.colors.text};
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

export const BadgeIcon = styled.img`
	margin: 0 5px 0 0;
`;

export const CoinsText = styled.div`
	display: flex;
	align-items: center;
	font-size: 12px;
	padding: 15px 15px;
	position: absolute;
	top: 0;
	right: 0;
	color: ${(props) => props.theme.colors.text};
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

export const CoinsIcon = styled.img`
	margin: 0 0 0 7px
`;

// Ranking Progress Bar
export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin: 0 0 10px 0;
`; 

export const ProgressText = styled.p`
  font-size: 10px;
  margin: 0 2px 4px 0;
  color: ${props => props.theme.colors.text};
`;

export const ProgressBar = styled.div`
  height: 8px;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.secondary};
`;

export const ProgressFiller = styled.div`
  background: ${props => props.theme.colors.hover};
  width: 100%;
  height: 100%;
  transition: width 0.5s linear;
`;

// Profile 

export const Main = styled.main`
	min-height: 100vh;
	position: relative;
	width: 300px;
	@media (min-width: 768px) {
		width: 320px;
	}
`;
export const ProfileContainer = styled.section`
	display: flex;
	flex-direction: column;
  align-items: center;
	min-height: 100vh;
	background-color: ${props => props.theme.colors.background};
  padding: 10px 7px 70px 7px;
	width: 100%;
  overflow: scroll;
  height: 100vh;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    border: 2px solid ${props => props.theme.colors.secondary};
  }
	::-webkit-scrollbar-thumb {
		background-color: ${props => props.theme.colors.secondary};
		:hover {
			background-color: ${props => props.theme.colors.primary};
		}
	}
`;

// Days on ship
export const DaysContainer = styled(StatusContainer)`
  display: flex;
  flex-direction: column;
	justify-content: center;
  align-items: flex-start;
	margin: 0;
  padding: 7px 5px;
	border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
`;

export const DaysText = styled.div`
  margin: 0;
  padding: 2px 0;
	display: flex;
	align-items: center;
	font-family: 'OPen Sans';
	font-size: 12px;
	color: ${(props) => props.theme.colors.text};
	@media (min-width: 768px) {
		font-size: 13px;
	}
`;

export const Items = styled.div`
  padding: 3px 0px 7px 3px;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Investments = styled(Items)`
	border-bottom: none;
`;

export const ContainerTitle = styled(Username)`
	font-size: 15px;
	margin: 7px 0 5px 3px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

// Buttons
export const ButtonContainer = styled.div`
	display: flex;
  align-items: center;
	justify-content: space-between;
  padding: 10px 3px 7px 3px;
	position: fixed;
	width: 300px;
	right: 0;
	bottom: 0px;
	z-index: 1;
	background-color: ${props => props.theme.colors.primary};
	border-top: 1px solid ${(props) => props.theme.colors.secondary};
	@media (min-width: 768px) {
		width: 320px;
	}
`;

export const ButtonSignOut = styled.button`
	background-color: transparent;
	font-size: 30px;
	padding: 0 10px 0 0;
	color: ${props => props.theme.colors.text};
	:hover, :focus {
		color: ${props => props.theme.colors.hover};
	}
`;

export const ButtonSettings = styled(ButtonSignOut)`
	padding: 0 0 0 10px;
`;

// Items Profile
export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
	justify-content: space-between;
  padding: 0;
  margin: 0;
  width: fit-content;
	font-family: 'Open Sans', serif;
`;

export const ItemsTitle = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  margin: 0 0 3px 3px;
  padding: 0;
`;

// InvestmentProfile
export const InvestmentContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-family: 'Open Sans', serif;
`;

export const InfoIcon = styled(FaInfoCircle)`
	font-size: 14px;
	cursor: pointer;
	outline: none;
	:hover, :focus {
		color: ${props => props.theme.colors.primary};
	}
`;

export const InvestmentText = styled(ItemsTitle)`
	margin: 2px;
`;

export const InvestmentChange = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2px 0 5px 3px;
	font-size: 14px;
  color: ${props => props.theme.colors.text};
  padding: 0;
`;

export const ValueChange = styled(InvestmentText)`
	margin: 5px 5px 0 0;
	${props =>
		props.percent ?
		`color: #e83715;`
		:  
		`color: #6DD704;`
	};
`;

export const IconUp = styled(FaArrowUp)`
	margin: 0 5px -1px 0;
`;

export const IconDown = styled(FaArrowDown)`
	margin: 0 5px -1px 0;
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

export const ConfirmDialog = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 15px;
	font-size: 14px;
	max-width: 300px;
	background-color: ${props => props.theme.colors.background};
	border: 2px solid ${(props) => props.theme.colors.secondary};
	color: ${props => props.theme.colors.text};
`;

export const ButtonBox = styled.div`
	display: flex;
	margin-top: 5px;
`;

export const CloseIcon = styled(FaTimes)`
	font-size: 17px;
	cursor: pointer;
	position: absolute;
	top: 5px;
	right: 5px;
	:hover, :focus {
		transform: scale(1.2);
	}
`;

// Energy Profile
export const EnergyContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const EnergyText = styled(ItemsTitle)`
	margin: 0 0 3px 3px;
	font-family: 'Open Sans', serif;
`;

const alert = keyframes`
	from { transform: scale(1) }
	to { transform: scale(1.2) }
`;

export const AlertIcon = styled(FaExclamationTriangle)`
	color: red;
	animation: ${alert} 1s linear infinite alternate-reverse;
	margin-left: 10px;
	cursor: pointer;
	outline: none;
	:focus {
		outline: 1px solid red;
	}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const Avatar = styled.img`
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 2px;
  height: 40px;
  @media (min-width: 768px) {
    height: 50px;
  }
`;

export const Button = styled.button`
  color: ${(props) => props.theme.colors.text};
  background: none;
  border: none;
  padding: 0;
  margin: 0 5px;
  font-size: 16px;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const EditButton = styled.button`
  color: ${props => props.theme.colors.text};
  background: none;
  border: none;
  padding: 0;
  margin: 0 5px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    border: 1px solid ${props => props.theme.colors.secondary};
  }
  :focus {
    background: ${props => props.theme.colors.accent};
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 300px;
  background-color: ${props => props.theme.colors.background};
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  border: 2px solid ${props => props.theme.colors.secondary};
  padding: 10px;
`;

export const AvatarButton = styled.button`
  background-color: ${props => props.theme.colors.secondary};
  :hover {
    background-color: ${props => props.theme.colors.primary};
  }
  border: none;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
`;

export const AvatarImage = styled.img`
  height: 50px;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
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
  color: ${(props) => props.theme.colors.text};
  padding: 5px;
`;

export const SelectedText = styled.p`
  margin: 5px 0;
  padding: 0;
  font-size: 14px;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;