import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  color: #000;
  background-color: #000;
  color: #fff;
`;

export const GameContainer = styled.div`
  padding: 100px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Figure
export const FigureContainer = styled.svg`
  fill: transparent;
  stroke: #fff;
  stroke-width: 5px;
  margin-bottom: 70px;
  stroke-linecap: round;
`;

export const FigurePart = styled.div`
  display: none;
`;

// Wrong Letters
export const Status = styled.h3`
  position: absolute;
  font-size: 20px;
  top: 100px;
  left: 22px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 200px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    top: 80px;
  }
`;

export const StatusText = styled.p`
  letter-spacing: 10px;
  margin: 5px 0 0 0;
`;

// Word
export const Words = styled.div`
  display: flex;
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Letter = styled.p`
  border-bottom: 3px solid #fff;
  display: inline-flex;
  font-size: 34px;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  height: 50px;
  width: 20px;
  text-transform: uppercase;
`;

// Notification
export const NotificationsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  padding: 7px;
  border-radius: 5px;
  transition: transform 0.3s ease-in-out;
  background-color: ${(props) => props.theme.hover};
  ${(props) =>
    props.visible
      ? `
    display: flex;
    `
      : `
    display: none;
    `};
`;

// Finish Dialog
export const DialogContainer = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  border: 2px solid ${(props) => props.theme.secondary};
  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.hover};
  color: ${(props) => props.theme.textColor};
  font-size: 16px;
  width: fit-content;
  text-transform: uppercase;
  font-family: "Trispace";
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
