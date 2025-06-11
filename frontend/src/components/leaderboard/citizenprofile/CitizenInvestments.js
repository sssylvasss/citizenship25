import { ContainerTitle } from "../Styling";
import {
  InvestmentContainer,
  InvestmentText,
  InvestmentChange,
  ValueChange,
  IconDown,
  IconUp,
} from "./Styling";

export const CitizenInvestments = ({
  username,
  investmentQuantity,
  investments,
  totalMarketValue,
  percent,
  percentDifference,
  difference,
}) => {
  return (
    <InvestmentContainer>
      <ContainerTitle>{username} investments</ContainerTitle>
      {investmentQuantity > 0 ? (
        <>
          <InvestmentText>Quantity: {investmentQuantity}st</InvestmentText>
          <InvestmentText>Initial investment:</InvestmentText>
          <InvestmentText>{investments}$</InvestmentText>
          <InvestmentText>Current value:</InvestmentText>
          <InvestmentText>{totalMarketValue}$</InvestmentText>
          <InvestmentChange>
            Since purchase:
            <ValueChange percent={percent}>
              {percent && { percent } ? <IconDown /> : <IconUp />}
              {percentDifference}% ({difference}$)
            </ValueChange>
          </InvestmentChange>
        </>
      ) : (
        <InvestmentText>No investments.</InvestmentText>
      )}
    </InvestmentContainer>
  );
};
