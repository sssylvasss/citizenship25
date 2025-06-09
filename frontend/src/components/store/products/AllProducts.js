import React from 'react';
import { useSelector } from 'react-redux';

import { Product } from './Product';
import { MyCart } from '../cart/MyCart';
import { Main, Title, ProductsWrapper } from './Styling';

export const Products = () => {
	const allProducts = useSelector((store) => store.products);

	return (
		<Main>
			<Title>Space shop</Title>
			<MyCart />
			<ProductsWrapper>
				{allProducts.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</ProductsWrapper>
		</Main>
	);
};