import styled from "styled-components";

import dish2 from './dish2.png';

// CookFood
export const GameContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  color: ${props => props.theme.textColor};
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  @media (min-width: 768px) {
    padding: 0 60px;
  }
  @media (min-width: 1025px) {
    flex-direction: row;
    padding: 0 120px;
  }
`;

export const ShopContainer = styled.div`
  width: 100%;
  min-width: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  @media (min-width: 1024px) {
    margin-top: 60px;
  }
`;

// Dishes To Cook
export const Container = styled.div`
  position: relative;
  background-color: #333333;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px 5px;
  width: 100%;
  @media (min-width: 1024px) {
    width: 90%;
  }
  @media (min-width: 1025px) {
    padding: 15px 5px 10px 5px;
  }
`;

export const Image = styled.img`
  width: auto;
  height: 35px;
  cursor: pointer;
  margin-top: 5px;
  @media (min-width: 768px) {
    height: 50px;
    margin-top: 10px;
  }
`;

export const Task = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(4, minmax(20%, 1fr));
  grid-template-rows: repeat(4, minmax(20%, 1fr));
  @media (min-width: 768px) {
    margin-top: 30px;
  }
  > div {
    height: 70px;
    width: auto;
    border-radius: 5px;
    display: flex;
    background-image: url(${dish2});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    &.gray {
      filter: gray;
      -webkit-filter: grayscale(1);
    }
    @media (min-width: 768px) {
      height: 100px;
    }
  }
`;

export const PlateContainerTitle = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 10px;
  left: 12px;
  @media (min-width: 768px) {
    left: 20px;
    top: 15px;
  }
`;


// Food Items
export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(21%, 1fr));
  grid-template-rows: repeat(3, minmax(30%, 1fr));
  grid-gap: 5px;
  padding: 10px;
  width: 100%;
  margin: 10px 0;
  @media (min-width: 1024px) {
    width: 85%;
    margin: 20px 0;
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(3, minmax(4%, 1fr));
    grid-template-rows: repeat(5, minmax(4%, 1fr));
    width: 35%;
    margin: 60px 0 0 20px;
  }
`;

export const FoodImage = styled.img`
  width: auto;
  height: 40px;
  cursor: pointer;
  @media (min-width: 768px) {
    height: 65px;
    margin: 5px;
  }
`;

// Finish Dialog
export const DialogContainer = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-directioN: column;
  align-items: center;
  max-width: 320px;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  border: 2px solid ${props => props.theme.secondary};
  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

export const FinishButton = styled.button`
  padding: 10px 15px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.hover};
  color: ${(props) => props.theme.textColor};
  font-size: 16px;
  width: fit-content;
  text-transform: uppercase;
  font-family: 'Trispace';
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

export const DialogText = styled.p`
	font-size: 16px;
  margin: 0;
  text-align: center;
`;