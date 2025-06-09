import React from 'react';

import { SnakeItem } from './Styling';

export const Snake = (props) => {
	return props.snakeDots.map((snakeDot, i) => (
		<SnakeItem 
			key={i} 
			top={`${snakeDot[0]}rem`} 
			left={`${snakeDot[1]}rem`} />
	));
}