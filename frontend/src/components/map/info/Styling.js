import styled from "styled-components";
import {
  FaFish,
  FaUtensils,
  FaShoppingCart,
  FaSquareRootAlt,
  FaTh,
  FaQuestion,
} from "react-icons/fa";

// Info
export const InfoContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  border: 2px solid ${(props) => props.theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  min-width: 280px;
  max-width: 300px;
  color: ${(props) => props.theme.textColor};
  @media (min-width: 500px) {
    max-width: 450px;
    padding: 10px;
  }
`;

export const ShipInfo = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 0 0 5px 5px;
  border-bottom: 2px solid ${(props) => props.theme.primary};
`;

export const InfoPage = styled.div`
  padding: 10px 10px 30px 10px;
  height: fit-content;
`;

export const PageTitle = styled.h3`
  font-size: 14px;
  text-align: left;
  text-transform: uppercase;
  margin: 0;
  padding: 2px;
  width: fit-content;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const TextInfo = styled.p`
  font-size: 12px;
  text-align: left;
  margin: 7px 0;
  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

export const MoveText = styled.p`
  font-size: 12px;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0 0 0;
`;

export const GameText = styled.p`
  font-size: 12px;
  text-align: left;
  margin: 3px 0 5px 0;
  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

export const Fish = styled(FaFish)`
  font-size: 20px;
`;

export const Math = styled(FaSquareRootAlt)`
  font-size: 20px;
`;

export const Trivia = styled(FaQuestion)`
  font-size: 20px;
`;

export const Memory = styled(FaTh)`
  font-size: 20px;
`;

export const Cutlery = styled(FaUtensils)`
  font-size: 20px;
`;

export const Shop = styled(FaShoppingCart)`
  font-size: 20px;
  margin-top: 10px;
`;

export const CoinsIcon = styled.img`
  margin: 0 5px 0 0;
  width: 20px;
`;

export const BottomText = styled.div`
  margin-top: 12px;
  text-align: left;
`;

export const EndText = styled.p`
  font-size: 12px;
  margin: 5px 0 0 0;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const EndTextName = styled(EndText)`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

export const Email = styled.a`
  font-size: 10px;
  text-decoration: underline;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  margin: 0;
  :hover {
    color: ${(props) => props.theme.primary};
  }
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;
