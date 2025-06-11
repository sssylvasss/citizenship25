import styled, { keyframes } from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  z-index: 999;
`;

const loading = keyframes`
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(40px);
	}
`;

export const LoaderWrapper = styled.div`
  width: 80px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoaderBall = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.text};
  animation: ${loading} 0.5s ease-in-out infinite alternate;
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
`;

const X = keyframes`
  0% {
    transform: translate(-100px, 0);
  }
  100% {
    transform: translate(100px, 0)
  }
`;

const Y = keyframes`
  25% {
    transform: translate(0, -50px);
  }
  0%, 50%, 100% {
    transform: translate(0, 0);
  }
  75% {
    transform: translate(0, 50px);
  }
`;

export const Wrapper1 = styled.div`
  position: absolute;
  animation: ${X} 1s ease-in-out alternate infinite 0s both;
`;
export const Wrapper2 = styled.div`
  position: absolute;
  animation: ${X} 1.1s ease-in-out alternate infinite 0s both;
`;
export const Wrapper3 = styled.div`
  position: absolute;
  animation: ${X} 1.2s ease-in-out alternate infinite 0s both;
`;
export const Wrapper4 = styled.div`
  position: absolute;
  animation: ${X} 1.3s ease-in-out alternate infinite 0s both;
`;
export const Wrapper5 = styled.div`
  position: absolute;
  animation: ${X} 1.4s ease-in-out alternate infinite 0s both;
`;

export const Div1 = styled.div`
  background: ${(props) => props.theme.textColor};
  border-radius: 100%;
  height: 50px;
  margin: 40px;
  width: 50px;
  opacity: 1;
  animation: ${Y} 1s linear infinite 0s;
`;

export const Div2 = styled.div`
  background: ${(props) => props.theme.textColor};
  border-radius: 100%;
  height: 40px;
  width: 40px;
  opacity: 0.8;
  animation: ${Y} 1.1s linear infinite 0s;
`;

export const Div3 = styled.div`
  background: ${(props) => props.theme.textColor};
  border-radius: 100%;
  height: 30px;
  width: 30px;
  opacity: 0.6;
  animation: ${Y} 1.2s linear infinite 0s;
`;

export const Div4 = styled.div`
  background: ${(props) => props.theme.textColor};
  border-radius: 100%;
  height: 20px;
  width: 20px;
  opacity: 0.4;
  animation: ${Y} 1.3s linear infinite 0s;
`;

export const Div5 = styled.div`
  background: ${(props) => props.theme.textColor};
  border-radius: 100%;
  height: 10px;
  width: 10px;
  opacity: 0.2;
  animation: ${Y} 1.4s linear infinite 0s;
`;
