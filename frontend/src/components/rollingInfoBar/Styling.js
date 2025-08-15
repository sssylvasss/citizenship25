import styled, { keyframes } from "styled-components";
import { FaTimes } from "react-icons/fa";

// Rolling info bar
export const MainBar = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.secondary};
  position: fixed;
  bottom: 60px;
  left: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.85;
  width: 100%;
  overflow: hidden;
  @media (min-width: 768px) {
    bottom: 0;
  }
`;

const Roller = keyframes`
  5% { opacity: 0; transform: translateX(100%) }
  10% { opacity: 1 }
  95% { opacity: 1 }
  100% { opacity: 0.6; transform: translateX(-100%) }
`;

export const RollingText = styled.div`
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  font-size: 11px;
  animation: ${Roller} 20s linear infinite;
  opacity: 0;
  padding: 0;
  width: 100%;
  @media (min-width: 768px) {
    animation: ${Roller} 30s linear infinite;
  }
  @media (min-width: 1024px) {
    bottom: 14px;
    font-size: 15px;
  }
`;

// Weather
export const WeatherText = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  padding: 10px 10px 5px 0;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};
  border-right: 2px solid ${(props) => props.theme.colors.text};
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  padding: 0;
  text-transform: uppercase;
  background-color: transparent;
  font-weight: 400;
  margin-left: 5px;
  font-size: 11px;
  color: ${(props) => props.theme.colors.text};
  text-decoration: underline;
  @media (min-width: 768px) {
    font-weight: bold;
    margin-left: 10px;
    font-size: 15px;
  }
`;

export const DialogContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 320px;
  color: ${(props) => props.theme.colors.text};
  @media (min-width: 768px) {
    max-width: 350px;
    padding: 15px;
  }
`;

export const ForecastTitle = styled.h2`
  font-size: 16px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const WeatherContainer = styled.div`
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
`;

export const DayText = styled.p`
  font-size: 16px;
  text-transform: uppercase;

`;

//Housing
export const HousingText = styled(WeatherText)`
  margin-left: 10px;
  border-right: none;
  @media (min-width: 768px) {
    margin-left: 10px;
  }
`;

export const HouseTitle = styled(ForecastTitle)`
  text-align: center;
`;

export const HouseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

export const HouseImage = styled.img`
  width: 200px;
  @media (min-width: 768px) {
    width: 220px;
  }
`;

export const HouseTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
  padding-bottom: 10px;
`;

export const Title = styled.h1`
  margin: 5 0 0 0;
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const HouseText = styled.p`
  font-size: 11px;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

export const PriceContainer = styled.div`
  padding-top: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const BuyButton = styled.button`
  padding: 4px;
  width: fit-content;
  text-transform: uppercase;
  font-family: "Trispace", serif;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.secondary};
  :hover,
  :focus {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const CloseIcon = styled(FaTimes)`
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 7px;
  right: 7px;
  outline: none;
  :hover {
    transform: scale(1.2);
  }
  :focus {
    color: ${(props) => props.theme.colors.primary};
  }
  @media (min-width: 768px) {
    font-size: 20px;
    top: 10px;
    right: 10px;
  }
`;

export const BuyDialog = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  font-size: 14px;
  max-width: 300px;
  background-color: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
`;
