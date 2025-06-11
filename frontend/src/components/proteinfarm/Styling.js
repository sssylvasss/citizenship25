import styled, { keyframes } from "styled-components";
import { FaFish } from "react-icons/fa";

//Wave animation
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
    transform: translate(0, -30px);
  }
  0%, 50%, 100% {
    transform: translate(0, 0);
  }
  75% {
    transform: translate(0, 20px);
  }
`;

export const RoundWrapper = styled.div`
  z-index: 1;
  margin-top: 55%;
  position: absolute;
  animation: ${X} 1s ease-in-out alternate infinite 0s both;
  @media (min-width: 500px) {
    margin-top: 30%;
  }
  @media (min-width: 768px) {
    margin-top: 20%;
  }
  @media (min-width: 1200px) {
    margin-top: 17%;
  }
  @media (min-width: 2000px) {
    margin-top: 18%;
  }
`;
export const RoundWrapper2 = styled(RoundWrapper)`
  z-index: 5;
  animation: ${X} 2s ease-in-out alternate infinite 0s both;
  @media (min-width: 768px) {
    margin-top: 27%;
  }
  @media (min-width: 1200px) {
    margin-top: 18%;
  }
  @media (min-width: 2000px) {
    margin-top: 17%;
  }
`;
export const RoundWrapper3 = styled(RoundWrapper)`
  animation: ${X} 3s ease-in-out alternate infinite 0s both;
  @media (min-width: 768px) {
    margin-top: 25%;
  }
  @media (min-width: 1200px) {
    margin-top: 17%;
  }
  @media (min-width: 2000px) {
    margin-top: 18%;
  }
`;
export const Round1 = styled.div`
  z-index: 7;
  border-top: 2px solid #fff;
  background-color: #9de2fa;
  border-radius: 100%;
  height: 150px;
  width: 450px;
  animation: ${Y} 3s linear infinite 0s;
  @media (min-width: 768px) {
    width: 1200px;
  }
  @media (min-width: 1200px) {
    width: 2000px;
  }
  @media (min-width: 2000px) {
    width: 2500px;
  }
`;
export const Round2 = styled(Round1)`
  z-index: 7;
  animation: ${Y} 4s linear infinite 0s;
  width: 500px;
  @media (min-width: 768px) {
    width: 1000px;
  }
  @media (min-width: 1200px) {
    width: 1400px;
  }
  @media (min-width: 2000px) {
    width: 2400px;
  }
`;
export const Round3 = styled(Round1)`
  z-index: 6;
  animation: ${Y} 4s linear infinite 0s;
  width: 450px;
  @media (min-width: 768px) {
    width: 1200px;
  }
  @media (min-width: 1200px) {
    width: 1800px;
  }
  @media (min-width: 2000px) {
    width: 1800px;
  }
`;

//Fish animation

const Roller = keyframes`
	0% {
		transform: translate(200, 0);
		transform: rotate(-90deg);
	}
  10% {
    transform: translate(-80px, 800);
  }
	25% {
		
    transform: translate(-200px, -500px);
		
  }
  50% {
    transform: translate(-500px, 110px);
		transform: rotate(-180deg);
  }
  75% {
    transform: translate(200, 600px);
		
  }
	100% {
		transform: translate(50, 0)
	}
	;`;

const Roller2 = keyframes`
	0% {
		transform: translate(0, 0);
		transform: rotate(-90deg);
	}
  10% {
    transform: translate(-120px, 770);
  }
	25% {
    transform: translate(100px, -250px);
  }
  50% {
    transform: translate(0, 0);
		transform: rotate(90deg);
  }
  75% {
    transform: translate(200, 500px);
  }
	100% {
		transform: translate(0, 0)
	}
	;`;

const Roller3 = keyframes`
	0% {
		transform: translate(0, 0);
		transform: rotate(-90deg);
	}
  10% {
    transform: translate(-200px, 900);
  }
	25% {
    transform: translate(300px, -700px);
  }
  50% {
    transform: translate(0, 0);
		transform: rotate(90deg);
  }
  75% {
    transform: translate(200, 500px);
  }
	100% {
		transform: translate(0, 0)
	}
	;`;

//Fishes for desktop
export const FishWrapper1 = styled.button`
  opacity: 0.8;
  position: absolute;
  background-color: transparent;
  right: 20%;
  top: 70%;
  left: 80%;
  animation: ${Roller} 16s linear infinite;
  &:disabled {
    opacity: 0;
  }
`;
export const Icon1 = styled(FaFish)`
  font-size: 40px;
  opacity: 0.5;
  color: #73bed9;
`;

export const HidePhone = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;
export const FishWrapper13 = styled.button`
  @media (min-width: 768px) {
    z-index: 2;
    opacity: 0.8;
    position: absolute;
    background-color: transparent;
    right: 45%;
    top: 70%;
    left: 55%;
    animation: ${Roller3} 6s linear infinite;
    &:disabled {
      opacity: 0;
    }
  }
`;
export const Icon13 = styled(FaFish)`
  @media (min-width: 768px) {
    font-size: 40px;
    opacity: 0.5;
    color: #73bed9;
  }
`;
export const FishWrapper14 = styled.button`
  @media (min-width: 768px) {
    z-index: 2;
    opacity: 0.8;
    position: absolute;
    background-color: transparent;
    right: 30%;
    top: 60%;
    left: 70%;
    animation: ${Roller3} 8s linear infinite;
    &:disabled {
      opacity: 0;
    }
  }
`;
export const Icon14 = styled(FaFish)`
  @media (min-width: 768px) {
    font-size: 40px;
    opacity: 0.5;
    color: #73bed9;
  }
`;

export const FishWrapper15 = styled.button`
  @media (min-width: 768px) {
    z-index: 2;
    opacity: 0.8;
    position: absolute;
    background-color: transparent;
    right: 78%;
    top: 67%;
    left: 23%;
    animation: ${Roller3} 5s linear infinite;
    &:disabled {
      opacity: 0;
    }
  }
`;
export const Icon15 = styled(FaFish)`
  @media (min-width: 768px) {
    font-size: 60px;
    opacity: 0.5;
    color: #73bed9;
  }
`;
export const FishWrapper16 = styled.button`
  @media (min-width: 768px) {
    z-index: 2;
    opacity: 0.8;
    position: absolute;
    background-color: transparent;
    right: 60%;
    top: 60%;
    left: 40%;
    animation: ${Roller3} 11s linear infinite;
    &:disabled {
      opacity: 0;
    }
  }
`;
export const Icon16 = styled(FaFish)`
  @media (min-width: 768px) {
    font-size: 50px;
    opacity: 0.5;
    color: #73bed9;
  }
`;
export const FishWrapper17 = styled.button`
  @media (min-width: 768px) {
    z-index: 2;
    opacity: 0.8;
    position: absolute;
    background-color: transparent;
    right: 55%;
    top: 65%;
    left: 45%;
    animation: ${Roller3} 6s linear infinite;
    &:disabled {
      opacity: 0;
    }
  }
`;
export const Icon17 = styled(FaFish)`
  @media (min-width: 768px) {
    font-size: 40px;
    opacity: 0.5;
    color: #73bed9;
  }
`;
export const FishWrapper18 = styled.button`
  @media (min-width: 768px) {
    z-index: 2;
    opacity: 0.8;
    position: absolute;
    background-color: transparent;
    right: 30%;
    top: 60%;
    left: 70%;
    animation: ${Roller3} 8s linear infinite;
    &:disabled {
      opacity: 0;
    }
  }
`;
export const Icon18 = styled(FaFish)`
  @media (min-width: 768px) {
    font-size: 40px;
    opacity: 0.5;
    color: #73bed9;
  }
`;
export const FishWrapper19 = styled.button`
	@media (min-width: 768px) {
	z-index: 2;
	opacity: 0.8;
	position: absolute;
	background-color: transparent;
	right: 65%;
	top: 70%;
	left: 35%;
	animation: ${Roller3} 12s linear infinite;
	&:disabled {
		opacity: 0;
	}
	)
`;
export const Icon19 = styled(FaFish)`
  @media (min-width: 768px) {
    font-size: 40px;
    opacity: 0.5;
    color: #73bed9;
  }
`;

export const FishWrapper2 = styled.button`
  background-color: transparent;
  opacity: 0.8;
  animation: ${Roller2} 18s linear infinite;
  top: 50%;
  right: 50%;
  left: 50%;
  position: absolute;
  height: 50px;
  width: 50px;
  &:disabled {
    opacity: 0;
    width: 80px;
    height: 100px;
  }
`;
export const Icon2 = styled(FaFish)`
  font-size: 40px;
  opacity: 0.5;
  color: #73bed9;
`;

export const FishWrapper3 = styled.button`
  background-color: transparent;
  opacity: 0.8;
  animation: ${Roller} 15s linear infinite;
  top: 75%;
  right: 30%;
  left: 70%;
  position: absolute;
  height: 50px;
  width: 50px;
  &:disabled {
    opacity: 0;
  }
`;
export const Icon3 = styled(FaFish)`
  color: #73bed9;
  opacity: 0.5;
  font-size: 40px;
`;

export const FishWrapper4 = styled.button`
  background-color: transparent;
  z-index: 2;
  opacity: 0.8;
  animation: ${Roller} 17s linear infinite;
  top: 70%;
  right: 40%;
  left: 60%;
  position: absolute;
  height: 50px;
  width: 50px;
  &:disabled {
    opacity: 0;
  }
`;
export const Icon4 = styled(FaFish)`
  font-size: 40px;
  color: #73bed9;
  opacity: 0.5;
`;

export const FishWrapper5 = styled.button`
  background-color: transparent;
  z-index: 2;
  opacity: 0.8;
  animation: ${Roller} 11s linear infinite;
  top: 70%;
  right: 40%;
  left: 60%;
  position: absolute;
  height: 50px;
  width: 50px;
  &:disabled {
    opacity: 0;
  }
`;
export const Icon5 = styled(FaFish)`
  color: #73bed9;
  opacity: 0.5;
  font-size: 30px;
`;

export const FishWrapper6 = styled.button`
  background-color: transparent;
  z-index: 2;
  opacity: 0.8;
  animation: ${Roller} 13s linear infinite;
  top: 76%;
  right: 65%;
  left: 35%;
  position: absolute;
  height: 50px;
  width: 50px;
  &:disabled {
    opacity: 0;
  }
`;
export const Icon6 = styled(FaFish)`
  font-size: 25px;
  opacity: 0.5;
  color: #73bed9;
`;

export const FishWrapper7 = styled.button`
  background-color: transparent;
  z-index: 2;
  opacity: 0.8;
  animation: ${Roller} 15s linear infinite;
  top: 63%;
  right: 60%;
  left: 40%;
  position: absolute;
  height: 50px;
  width: 50px;
  &:disabled {
    opacity: 0;
  }
`;
export const Icon7 = styled(FaFish)`
  font-size: 30px;
  opacity: 0.5;
  color: #73bed9;
`;

export const FishWrapper8 = styled.button`
  background-color: transparent;
  z-index: 2;
  opacity: 0.8;
  animation: ${Roller} 7s linear infinite;
  top: 80%;
  right: 50%;
  left: 50%;
  position: absolute;
  &:disabled {
    opacity: 0;
  }
`;
export const Icon8 = styled(FaFish)`
  font-size: 30px;
  opacity: 0.5;
  color: #73bed9;
`;

export const FishWrapper9 = styled.button`
  background-color: transparent;
  z-index: 1;
  opacity: 0.8;
  animation: ${Roller} 18s linear infinite;
  top: 75%;
  right: 50%;
  left: 50%;
  position: absolute;
  &:disabled {
    opacity: 0;
  }
`;
export const Icon9 = styled(FaFish)`
  color: #73bed9;
  opacity: 0.5;
  font-size: 50px;
`;

export const Icon10 = styled(FaFish)`
  color: #73bed9;
  opacity: 0.5;
  font-size: 50px;
`;
export const FishWrapper10 = styled.button`
  background-color: transparent;
  z-index: 2;
  opacity: 0.8;
  animation: ${Roller} 13s linear infinite;
  top: 73%;
  right: 25%;
  left: 75%;
  position: absolute;
  &:disabled {
    opacity: 0;
  }
`;
export const Icon11 = styled(FaFish)`
  color: #73bed9;
  opacity: 0.5;
  font-size: 50px;
`;
export const FishWrapper11 = styled.button`
  background-color: transparent;
  z-index: 2;
  opacity: 0.8;
  animation: ${Roller} 9s linear infinite;
  top: 84%;
  right: 35%;
  left: 65%;
  position: absolute;
  &:disabled {
    opacity: 0;
  }
`;
export const Icon12 = styled(FaFish)`
  color: #73bed9;
  opacity: 0.5;
  font-size: 50px;
`;
export const FishWrapper12 = styled.button`
  background-color: transparent;
  z-index: 2;
  opacity: 0.8;
  animation: ${Roller} 8s linear infinite;
  top: 70%;
  right: 40%;
  left: 60%;
  position: absolute;
  &:disabled {
    opacity: 0;
  }
`;

export const GameTitle = styled.h1`
  z-index: 8;
  position: absolute;
  top: 30px;
  left: 20px;
  text-transform: uppercase;
`;

export const TransparentWrapper = styled.button`
  z-index: 5;
  background: transparent;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
`;

export const BackgroundWater = styled.div`
  z-index: 4;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 320px;
  background-color: #9de2fa;
  opacity: 1;
  @media (min-width: 768px) {
    height: 400px;
  }
  @media (min-width: 1200px) {
    height: 500px;
  }
`;

export const WaterContainer = styled.div`
	z-index: 5;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 600px;
	display: flex;
	justify-content: center;
	margin: 0 0 0 0;
	background: transparent;
	@media (min-width: 768px) {
		height: 700px;
	@media (min-width: 1200px) {
		height: 800px;
	}
	@media (min-width: 2000px) {
		height: 1000px;
	}
`;

export const MainContainer = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding-top: 40px;
  background: linear-gradient(#dcfcf7, #dcfcf7, #9de2fa, #9de2fa, #9de2fa);
`;
