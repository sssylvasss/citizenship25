import styled from "styled-components";

export const MainContainer = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 10px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
`;

// Memory Card
export const Card = styled.div`
  height: 120px;
  width: 90px;
  background-color: ${(props) => props.theme.secondary};
  margin: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  @media (min-width: 768px) {
    margin: 10px;
    height: 180px;
    width: 140px;
  }
`;

export const ImageCard = styled.img`
  margin: 5px;
  height: 120px;
  width: 90px;
  @media (min-width: 768px) {
    margin: 10px;
    height: 180px;
    width: 140px;
  }
`;

// Memory Board
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-top: 130px;
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${(props) => props.theme.primary};
  border: 4px solid ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.textColor};
  padding: 20px 10px;
  @media (min-width: 768px) {
    max-width: 90%;
  }
  @media (min-width: 1024px) {
    max-width: 85%;
    padding: 30px;
  }
  @media (min-width: 1400px) {
    max-width: 70%;
  }
`;

export const GameGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;
