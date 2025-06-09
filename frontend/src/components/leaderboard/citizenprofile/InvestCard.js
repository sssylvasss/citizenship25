import React from 'react';
import { InvestContainer, InvestTitle, InvestText, InvestValue } from './Styling';

export const InvestCard = ({ title, text, value, percent }) => {
	return (
		<InvestContainer>
			<InvestTitle>{title}</InvestTitle>
			<InvestText>{text}</InvestText>
			<InvestValue data-negative={percent ? "true" : "false"}>{value}</InvestValue>
		</InvestContainer>
	);
}; 