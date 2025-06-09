import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Dialog from '@mui/material/Dialog';

import { cart } from '../../../reducers/cart';
import { 
	MainContainer, 
	DialogContainer, 
	ImageDialogWrapper, 
	ImageDialog, 
	ProductContainer, 
	AddedText, 
	Text,
	Price,
	ProductWrapper,
	ImageWrapper,
	ProductImage,
	TextWrapper,
	TextDescription,
	AddButton,
	Icon } from './Styling';

export const Product = ({ product }) => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);

	const addProduct = () => {
		dispatch(cart.actions.addItem(product));
		setOpen(!open);
		setTimeout(() => {
			setOpen(false);
		}, 1200);
	};

	return (
		<MainContainer>
			<Dialog open={open} onClose={addProduct}>
				<DialogContainer>
					<ImageDialogWrapper>
						<ImageDialog
							src={require(`../assets/${product.image}`)}
							alt={product.title}
						/>
					</ImageDialogWrapper>
					<ProductContainer>
						<AddedText>Added to cart</AddedText>
						<Text>{product.title}</Text>
						<Price>{product.price}$</Price>
					</ProductContainer>
				</DialogContainer>
			</Dialog>
			<ProductWrapper>
				<ImageWrapper>
					<ProductImage
						src={require(`../assets/${product.image}`)}
						alt={product.title}
					/>
				</ImageWrapper>
				<TextWrapper>
					<Text 
						tabIndex='0' 
						aria-label={product.title}>
						{product.title}
					</Text>
					<TextDescription>{product.description}</TextDescription>
					<Price>{product.price}$</Price>
					<TextDescription>
						Ranking: {product.ranking} <Icon />
					</TextDescription>
					<AddButton
						type='button'
						disabled={product.inventory === 0}
						onClick={addProduct}
					>
						Add to cart
					</AddButton>
				</TextWrapper>
			</ProductWrapper>
		</MainContainer>
	);
};