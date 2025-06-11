import styled from "styled-components";
import { FaSquareRootAlt, FaFish } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  position: relative;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  padding: 5px;
  :hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
  :focus {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const PositionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
`;

export const Position = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Citizen = styled.p`
  color: ${(props) => props.theme.colors.text};
  margin: 0;
  padding: 0;
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const CitizenAvatar = styled.img`
  height: 20px;
  margin: 0 5px;
  padding: 2px;
  border-radius: 50%;
  @media (min-width: 768px) {
    height: 25px;
  }
`;

export const Score = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  padding: 5px;
  margin: 0;
  background-color: ${(props) => props.theme.colors.secondary};
  border: none;
  font-size: 12px;
  text-transform: uppercase;
  font-family: "Trispace", serif;
  :hover {
    opacity: 0.8;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px 20px 20px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  max-height: 220px;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 12px;
    border: 2px solid ${(props) => props.theme.secondary};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.secondary};
    :hover {
      background-color: ${(props) => props.theme.primary};
    }
  }
`;

export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  padding: 15px 20px 10px 20px;
  border-bottom: 2px solid ${(props) => props.theme.secondary};
`;

export const TableTitle = styled.p`
  width: 35%;
  padding: 0 0 5px 5px;
  margin: 0;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.textColor};
  font-size: 14px;
  @media (min-width: 1300px) {
    width: 40%;
  }
`;

export const BubbleTitle = styled(TableTitle)`
  cursor: pointer;
  position: absolute;
  left: 40%;
  :hover,
  :focus {
    opacity: 0.7;
  }
`;

export const FishTitle = styled(BubbleTitle)`
  cursor: pointer;
  left: 60%;
  :hover,
  :focus {
    opacity: 0.7;
  }
`;

export const MathTitle = styled(BubbleTitle)`
  cursor: pointer;
  left: 80%;
  :hover,
  :focus {
    opacity: 0.7;
  }
`;

export const CitizensList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 6px 4px 4px 4px;
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.secondary};
  @media (min-width: 768px) {
    padding: 6px 0 4px 0;
  }
`;

export const MathIcon = styled(FaSquareRootAlt)`
  font-size: 20px;
  @media (min-width: 414px) {
    font-size: 24px;
  }
`;

export const FishIcon = styled(FaFish)`
  font-size: 20px;
  @media (min-width: 414px) {
    font-size: 28px;
  }
`;

export const ScoreBubble = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  font-size: 14px;
  margin: 0 5px;
  @media (min-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 16px;
  }
`;

export const ScoreFish = styled(ScoreBubble)`
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const ScoreMath = styled(ScoreBubble)`
  background-color: ${(props) => props.theme.colors.accent};
`;
