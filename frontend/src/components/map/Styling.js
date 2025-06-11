import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import {
  FaFish,
  FaUtensils,
  FaShoppingCart,
  FaSquareRootAlt,
  FaInfoCircle,
  FaBed,
  FaTh,
  FaDumbbell,
  FaTimes,
  FaQuestion,
} from "react-icons/fa";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 100%;
  height: 50vh;
  position: relative;
  background-color: ${(props) => props.theme.colors.background};
  @media (min-width: 768px) {
    height: 60vh;
  }
  @media (min-width: 1024px) {
    height: 70vh;
  }
`;

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MapTitle = styled.h2`
  position: absolute;
  top: 0;
  left: 20px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};
  @media (min-width: 768px) {
    top: -40px;
  }
`;

export const FloorOne = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  width: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  :hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
  @media (min-width: 768px) {
    width: 50%;
    right: 0;
  }
`;

export const FloorTwo = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  width: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  :hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
  @media (min-width: 768px) {
    width: 50%;
    left: 0;
  }
`;

export const FloorThree = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  width: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  :hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
  @media (min-width: 768px) {
    width: 50%;
    left: 0;
  }
`;

export const FloorButton = styled.button`
  padding: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  :hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const FloorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FloorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FloorText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const FloorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FloorImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const FloorImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const FloorImageText = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  margin: 0;
  font-size: 14px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primary};
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

// Rooms
export const RoomClassroom = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1 / span 3;
  border: 2px solid ${(props) => props.theme.colors.text};
  border-right: none;
  border-top-left-radius: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  background-color: ${(props) => props.theme.colors.primary};
  :hover,
  :focus {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;

export const RoomBedroom = styled.div`
  grid-column: 1 / span 3;
  grid-row: 4 / span 3;
  border: 2px solid ${(props) => props.theme.colors.text};
  border-top: none;
  border-right: none;
  border-bottom-left-radius: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  background-color: ${(props) => props.theme.colors.primary};
  :hover,
  :focus {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;

export const RoomRestaurant = styled(RoomBedroom)`
  grid-column: 3 / span 2;
  grid-row: 3 / span 2;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.text};
  z-index: 1;
`;

export const RoomQuiz = styled.div`
  grid-column: 4 / span 3;
  grid-row: 1 / span 3;
  border-radius: 0px;
  border: 2px solid ${(props) => props.theme.colors.text};
  border-bottom: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  background-color: ${(props) => props.theme.colors.primary};
  :hover,
  :focus {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;

export const RoomStore = styled(Link)`
  grid-column: 4 / span 3;
  grid-row: 4 / span 3;
  border: 2px solid ${(props) => props.theme.colors.text};
  border-right: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  :hover,
  :focus {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;

export const RoomInfo = styled(RoomBedroom)`
  grid-column: 6 / span 2;
  grid-row: 3 / span 2;
  z-index: 1;
  border-radius: 0px;
  border: 2px solid ${(props) => props.theme.colors.text};
`;

export const RoomGym = styled(RoomBedroom)`
  grid-column: 7 / span 3;
  grid-row: 1 / span 3;
  z-index: 0;
  border-radius: 0px;
  border: 2px solid ${(props) => props.theme.colors.text};
  border-left: none;
  border-right: none;
  border-bottom: none;
`;

export const RoomMemory = styled(RoomClassroom)`
  grid-column: 7 / span 3;
  grid-row: 4 / span 3;
  border-radius: 0px;
`;

export const RoomFarm = styled(RoomClassroom)`
  grid-column: 10 / span 3;
  grid-row: 1 / span 3;
  border-top-right-radius: 150px;
  border-top-left-radius: 0;
  border: 2px solid ${(props) => props.theme.colors.text};
  border-bottom: none;
`;

export const RoomSpace = styled(RoomBedroom)`
  grid-column: 10 / span 3;
  grid-row: 4 / span 3;
  border-bottom-right-radius: 150px;
  border-bottom-left-radius: 0;
  border: 2px solid ${(props) => props.theme.colors.text};
`;

// Icons
export const Icons = styled.button`
  color: ${(props) => props.theme.colors.text};
  background-color: transparent;
  :hover {
    opacity: 0.7;
  }
`;

export const FishIcon = styled(FaFish)`
  font-size: 20px;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.text};
  @media (min-width: 768px) {
    font-size: 44px;
  }
`;

export const RestaurantIcon = styled(FaUtensils)`
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const ShoppingIcon = styled(FaShoppingCart)`
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const MathIcon = styled(FaSquareRootAlt)`
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const infoAnimation = keyframes`
	10% {  transform: scale(1) };
	30% { transform: scale(1.1) };
	50% {transform: scale(1) };
	70% { transform: scale(1.1) };
	100% { transform: scale(1) };
`;

export const InfoIcon = styled(FaInfoCircle)`
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  animation: ${infoAnimation} 4s linear;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const BedIcon = styled(FaBed)`
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const MemoryIcon = styled(FaTh)`
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const GymIcon = styled(FaDumbbell)`
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const QuizIcon = styled(FaQuestion)`
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const CloseIcon = styled(FaTimes)`
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  outline: none;
  color: ${(props) => props.theme.colors.text};
  :hover {
    transform: scale(1.2);
  }
  :focus {
    color: ${(props) => props.theme.colors.primary};
  }
  @media (min-width: 768px) {
    font-size: 20px;
    top: 12px;
    right: 12px;
  }
`;
