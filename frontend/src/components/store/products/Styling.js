import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

// All Products
export const Title = styled.h1`
	font-size: 30px;
	color: ${(props) => props.theme.textColor};
	text-transform: uppercase;
`;

export const ProductsWrapper = styled.div`
	display: flex;
	aling-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin: auto 0;
	margin-bottom: 100px;
`;

export const Main = styled.main`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin: 0;
`;

// Product
export const MainContainer = styled.div`
	display: flex;
	margin: 5px;
	margin-bottom: 10px;
	aline-items: center;
	justify-content: center;
	padding: 5px;
	width: 45%;
	border: 2px solid ${(props) => props.theme.primary};

	@media (min-width: 768px) {
		width: 25%;
		padding: 5px;
	}
	@media (min-width: 1200px) {
		width: 25%;
	}
`;

export const DialogContainer = styled.div`
	background-color: ${(props) => props.theme.colors.background};
	border: 2px solid ${(props) => props.theme.colors.primary};
	display: flex;
	padding: 10px;
	height: 150px;
	color: ${(props) => props.theme.colors.text};
`;

export const ImageDialogWrapper = styled.div`
	margin-right: 5px;
`;

export const ImageDialog = styled.img`
	background-color: ${(props) => props.theme.colors.secondary};
	padding: 7px 2px;
	margin-right: 10px;
	height: 120px;
`;

export const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 10px;
`;

export const AddedText = styled.p`
	font-size: 16px;
	text-transform: uppercase;
	padding: 3px;
	border-bottom: 2px solid ${(props) => props.theme.colors.primary};
`;

export const Text = styled.p`
	color: ${(props) => props.theme.colors.text};
	margin: 0;
	padding: 3px 0;
	font-size: 14px;
	font-weight: 600;
	outline: none;
	text-transform: uppercase;
	@media (min-width: 768px) {
		font-size: 16px;
	}
	:focus {
		color: ${(props) => props.theme.colors.primary};
	}
`;

export const Price = styled(Text)`
	font-weight: 400;
`;

export const ProductWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
`;

export const ImageWrapper = styled.div`
	margin: 0;
	display: flex;
	justify-items: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.secondary};
`;

export const ProductImage = styled.img`
	width: 100%;
	margin: 0;
	@media (min-width: 768px) {
		padding: 5px;
	}
	@media (min-width: 1200px) {
		max-width: 330px;
	}
`;

export const TextWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 7px;
	margin: 0;
`;

export const TextDescription = styled.p`
	color: ${(props) => props.theme.colors.text};
	margin: 2px 0;
	font-size: 12px;
	display: flex;
	align-items: center;
	@media (min-width: 768px) {
		font-size: 14px;
	}
`;

export const AddButton = styled.button`
	padding: 5px;
	margin-top: 10px;
	font-size: 12px;
	width: fit-content;
	text-transform: uppercase;
	font-family: 'Trispace', serif;
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.text};
	border: 1px solid ${(props) => props.theme.colors.secondary};
	:hover,
	:focus {
		background-color: ${(props) => props.theme.colors.secondary};
	}
`;

export const Icon = styled(FaArrowUp)`
	color: green;
	margin-left: 5px;
`;