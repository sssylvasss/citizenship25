import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  padding-top: 80px;
  min-height: 100vh;
  position: relative;
  overflow: auto;
  @media (min-width: 768px) {
    padding-top: 30px;
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  @media (min-width: 768px) {
    margin-top: 50px;
    padding: 0 40px;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 50vh;
  @media (min-width: 768px) {
    width: 90%;
    display: flex;
    height: 60vh;
  }
  @media (min-width: 1024px) {
    width: 80%;
    height: 70vh;
  }
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  margin: 20px 0 140px 0;
  overflow: hidden;
  @media (min-width: 1000px) {
    padding: 0 40px;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 20px 0 80px 0;
    align-items: flex-start;
  }
  @media (min-width: 1400px) {
    width: 90%;
  }
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;
  @media (min-width: 1000px) {
    flex-wrap: wrap;
    padding: 0;
    width: 40%;
  }
`;

export const WrapperLeaderBoard = styled(WrapperCard)`
  @media (min-width: 1000px) {
    width: 60%;
  }
`;

export const CardTitle = styled.h4`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};
  padding: 7px 10px;
  margin: 0;
  background-color: ${(props) => props.theme.colors.primary};
  @media (min-width: 768px) {
    width: fit-content;
  }
`;

export const CardTitleHighscore = styled(CardTitle)`
  width: 100%;
  margin-top: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.primary};
  box-shadow: rgba(149, 157, 165, 0.1) 0px 2px 8px;
  @media (min-width: 768px) {
    flex-wrap: wrap;
    padding: 0;
    width: 100%;
  }
`;

export const CitizensContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.primary};
  box-shadow: rgba(149, 157, 165, 0.1) 0px 2px 8px;
  @media (min-width: 768px) {
    flex-wrap: wrap;
    padding: 0;
    width: 100%;
  }
`;
