import styled, { keyframes } from "styled-components";

// Trivia
export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  padding-top: 10px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
`;

export const GameTitle = styled.h1`
  position: absolute;
  top: 30px;
  left: 20px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    top: 10px;
  }
`;

export const TriviaContainer = styled.div`
  margin: 200px 20px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.primary};
  border: 4px solid ${(props) => props.theme.hover};
  padding: 20px;
  display: flex;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 85%;
  @media (min-width: 768px) {
    max-width: 65%;
    padding: 30px;
    margin: 160px 20px;
  }
  @media (min-width: 1400px) {
    max-width: 45%;
  }
`;

export const Question = styled.h3`
  font-size: 18px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

const jumping = keyframes`
  from { transform: translateY(10) }
  to { transform: translateY(-10px) }
`;

export const AnswerButton = styled.button`
  padding: 10px;
  z-index: 2;
  font-size: 20px;
  margin: 0 10px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.textColor};
  animation: ${jumping} 0.4s linear infinite alternate-reverse;
  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.theme.hover};
    }
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  margin: 20px 10px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.textColor};
  font-size: 16px;
  width: fit-content;
  text-transform: uppercase;
  font-family: "Trispace";
  cursor: pointer;
  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.theme.hover};
    }
  }
`;

// TriviaStart
export const Text = styled.h2`
  text-align: center;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

// Animation
const X = keyframes`
  0% {
    transform: translate(-300px, 0);
  }
  100% {
    transform: translate(300px, 0)
  }
`;

const Y = keyframes`
  25% {
    transform: translate(0, -150px);
  }
  0%, 50%, 100% {
    transform: translate(0, 0);
  }
  75% {
    transform: translate(0, 150px);
  }
`;

export const Wrapper1 = styled.div`
  position: absolute;
  animation: ${X} 3s ease-in-out alternate infinite 0s both;
`;
export const Wrapper2 = styled.div`
  position: absolute;
  animation: ${X} 3.1s ease-in-out alternate infinite 0s both;
`;
export const Wrapper3 = styled.div`
  position: absolute;
  animation: ${X} 3.2s ease-in-out alternate infinite 0s both;
`;
export const Wrapper4 = styled.div`
  position: absolute;
  animation: ${X} 3.3s ease-in-out alternate infinite 0s both;
`;
export const Wrapper5 = styled.div`
  position: absolute;
  animation: ${X} 3.4s ease-in-out alternate infinite 0s both;
`;
export const Wrapper6 = styled.div`
  position: absolute;
  animation: ${X} 3.5s ease-in-out alternate infinite 0s both;
`;
export const Wrapper7 = styled.div`
  position: absolute;
  animation: ${X} 3.6s ease-in-out alternate infinite 0s both;
`;
export const Wrapper8 = styled.div`
  position: absolute;
  animation: ${X} 3.7s ease-in-out alternate infinite 0s both;
`;
export const Wrapper9 = styled.div`
  position: absolute;
  animation: ${X} 3.8s ease-in-out alternate infinite 0s both;
`;
export const Wrapper10 = styled.div`
  position: absolute;
  animation: ${X} 3.9s ease-in-out alternate infinite 0s both;
`;
export const Wrapper11 = styled.div`
  position: absolute;
  animation: ${X} 4s ease-in-out alternate infinite 0s both;
`;

export const Div1 = styled.div`
  background: #fff;
  border-radius: 100%;
  height: 80px;
  margin: 40px;
  width: 80px;
  opacity: 1;
  animation: ${Y} 2s linear infinite 0s;
`;

export const Div2 = styled.div`
  background: #fff;
  border-radius: 100%;
  height: 70px;
  width: 70px;
  opacity: 0.8;
  animation: ${Y} 2.1s linear infinite 0s;
`;

export const Div3 = styled.div`
	background: #fff};
	border-radius: 100%;
	height: 60px;
	width: 60px;
	opacity: 0.6;
	animation: ${Y} 2.2s linear infinite 0s;
`;

export const Div4 = styled.div`
  background: #fff;
  border-radius: 100%;
  height: 50px;
  width: 50px;
  opacity: 0.4;
  animation: ${Y} 2.3s linear infinite 0s;
`;

export const Div5 = styled.div`
  background: #fff;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  opacity: 0.3;
  animation: ${Y} 2.4s linear infinite 0s;
`;

export const Div6 = styled.div`
	background: #fff};
	border-radius: 100%;
	height: 30px;
	width: 30px;
	opacity: 0.3;
	animation: ${Y} 2.5s linear infinite 0s;
`;

export const Div7 = styled.div`
  background: #fff;
  border-radius: 100%;
  height: 20px;
  width: 20px;
  opacity: 0.2;
  animation: ${Y} 2.6s linear infinite 0s;
`;

export const Div8 = styled.div`
  background: #fff;
  border-radius: 100%;
  height: 10px;
  width: 10px;
  opacity: 0.2;
  animation: ${Y} 2.7s linear infinite 0s;
`;

export const Div9 = styled.div`
  background: #fff;
  border-radius: 100%;
  height: 10px;
  width: 10px;
  opacity: 0.2;
  animation: ${Y} 2.8s linear infinite 0s;
`;

export const Div10 = styled.div`
  background: #fff;
  border-radius: 100%;
  height: 10px;
  width: 10px;
  opacity: 0.1;
  animation: ${Y} 2.9s linear infinite 0s;
`;

export const Div11 = styled.div`
  background: #fff;
  border-radius: 100%;
  height: 10px;
  width: 10px;
  opacity: 0.1;
  animation: ${Y} 3s linear infinite 0s;
`;
