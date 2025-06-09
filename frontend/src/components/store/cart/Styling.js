import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

export const CartWrapper = styled.div`
	background-color: ${(props) => props.theme.secundary};
	display: flex;
	width: 100%;
	margin: 15px;
	justify-content: space-between;
	position: relative;
`;

export const DialogContainer = styled.ul`
	background-color: ${(props) => props.theme.colors.background};
	border: 2px solid ${(props) => props.theme.colors.primary};
	display: flex;
	flex-direction: column;
	padding: 20px;
	color: ${(props) => props.theme.colors.text};
	margin: 0;
`;

export const DialogHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
`;

export const HeaderText = styled.p`
	font-size: 14px;
	padding: 0 3px;
	:first-of-type {
		width: 40%;
	}
`;

export const TotalPrice = styled.p`
	color: ${(props) => props.theme.textColor};
	margin: 10px 0 5px 0;
	display: flex;
	align-items: center;
	font-size: 13px;
	@media (min-width: 768px) {
		font-size: 15px;
	}
`;

export const TotalRanking = styled(TotalPrice)`
	margin: 0;
`;

export const BuyButton = styled.button`
	padding: 5px 8px;
	margin-top: 10px;
	font-size: 12px;
	width: fit-content;
	text-transform: uppercase;
	background-color: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.textColor};
	border: 1px solid ${(props) => props.theme.secondary};
	:hover,
	:focus {
		background-color: ${(props) => props.theme.secondary};
	}
`;

export const ShoppingCart = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: flex-end;
	position: absolute;
	bottom 0; 
	right: 5%;
	color: ${(props) => props.theme.textColor};
	@media (min-width: 768px) {
		right: 12%;
	}
`;

export const ShoppingButton = styled.button`
	background-color: transparent;
	cursor: pointer;
	padding: 0;
	position: relative;
	color: ${(props) => props.theme.colors.text};
	:hover, :focus {
		color: ${(props) => props.theme.colors.primary};
	}
`;

// Confirmation Dialogs
export const ConfirmationDialog = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 20px;
	max-width: 300px;
	background-color: ${props => props.theme.backgroundColor};
	border: 2px solid ${(props) => props.theme.secondary};
	color: ${props => props.theme.textColor};
`;

export const Text = styled.p`
	font-size: 16px;
`;

export const ConfirmedButton = styled.button`
	background-color: ${(props) => props.theme.primary};
	border: 2px solid ${(props) => props.theme.secondary};
	font-size: 14px;
	padding: 8px;
	font-family: 'Trispace', serif;
	text-transform: uppercase;
	color: ${(props) => props.theme.textColor};
	:hover,
	:focus {
		background-color: ${(props) => props.theme.secondary};
	}
`;

export const Icon = styled(FaArrowUp)`
	color: green;
	margin-left: 5px;
`;

// Cart Item
export const ItemContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	border-bottom: 1px solid ${props => props.theme.secondary};
	padding: 8px 3px;
	min-width: 260px;
	@media (min-width: 768px) {
		min-width: 300px;
	}
`;

export const ImageTitleBox = styled.div`
	display: flex;
	align-items: center;
	width: 40%;
`;

export const ProductImage = styled.img`
	height: 30px;
	margin: 0 10px 0 0;
`;

export const ProductText = styled.p`
	font-size: 13px;
	color: ${props => props.theme.textColor};
	margin: 0;
`;

export const QuantityText = styled.p`
	font-size: 13px;
	margin: 0;
`;

export const ButtonContainer = styled.div`
	display: flex;	
	margin-left: 5px;
	align-items: center;
	justify-content: center;
	width: 30%;
`;

export const AddDeleteButton = styled.button`
	padding: 0 3px;
	background-color: transparent;
	color: ${props => props.theme.textColor};
	font-weight: bold;
	font-size: 16px;
	margin: 0 2px;
	:hover {
		color: ${(props) => props.theme.secondary};
	}
`;