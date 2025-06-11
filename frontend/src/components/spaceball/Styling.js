import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding-top: 10px;
  color: #fff;
  background-color: #090909;
`;

const Button = styled.button`
  border-radius: 50%;
  :hover {
    opacity: 0.7;
  }
`;

const animationOne = keyframes`
  0% { transform: translateY(500px) }
  10% { transform: translateY(-500px) }
  20% { transform: translateY(600px) }
  30% { transform: translateX(400px) }
  40% { transform: translateY(-400px) }
  50% { transform: translateY(400px) }
  55% { transform: translateY(-400px) }
  60% { transform: translateX(400px) }
  70% { transform: translateX(-500px) }
  80% { transform: translateY(500px) }
  90% { transform: translateX(400px) }
  100% { transform: translateY(-500px) }
`;

export const ButtonOne = styled(Button)`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #1a90ff;
  animation: ${animationOne} 16s linear infinite alternate-reverse;
`;

const animationTwo = keyframes`
  0% { transform: translateY(-600px) }
  10% { transform: translateX(0px) }
  20% { transform: translateY(-400px) }
  30% { transform: translateY(300px) }
  40% { transform: translateX(500px) }
  50% { transform: translateY(-300px) }
  60% { transform: translateX(-400px) }
  70% { transform: translateX(500px) }
  80% { transform: translateY(100px) }
  90% { transform: translateX(-300px) }
  100% { transform: translateY(500px) }
`;

export const ButtonTwo = styled(Button)`
  position: absolute;
  background-color: #ce1f6a;
  width: 120px;
  height: 120px;
  animation: ${animationTwo} 13s linear infinite alternate-reverse;
  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const animationThree = keyframes`
  0% { transform: translateX(300px) }
  10% { transform: translateX(-500px) }
  20% { transform: translateX(200px) }
  30% { transform: translateX(600px) }
  40% { transform: translateY(-600px) }
  50% { transform: translateX(-500px) }
  60% { transform: translateX(-100px) }
  70% { transform: translateY(500px) }
  80% { transform: translateY(-300px) }
  90% { transform: translateX(400px) }
  100% { transform: translateY(500px) }
`;

export const ButtonThree = styled(Button)`
  position: absolute;
  background-color: #b590ca;
  width: 170px;
  height: 170px;
  animation: ${animationThree} 12s linear infinite alternate-reverse;
  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const animationFour = keyframes`
  0% { transform: translateX(0px) }
  10% { transform: translateX(200px) }
  20% { transform: translateY(400px) }
  30% { transform: translateX(-300px) }
  40% { transform: translateY(200px) }
  50% { transform: translateX(200px) }
  60% { transform: translateX(600px) }
  70% { transform: translateY(500px) }
  80% { transform: translateY(-300px) }
  90% { transform: translateX(400px) }
  100% { transform: translateY(500px) }
`;

export const ButtonFour = styled(Button)`
  position: absolute;
  bottom: 30%;
  left: 20%;
  background-color: #29bb89;
  width: 130px;
  height: 130px;
  animation: ${animationFour} 14s linear infinite alternate-reverse;
  @media (min-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

const animationFive = keyframes`
  0% { transform: translateX(0px) }
  10% { transform: translateX(-600px) }
  20% { transform: translateY(-300px) }
  30% { transform: translateX(400px) }
  40% { transform: translateY(600px) }
  50% { transform: translateY(100px) }
  60% { transform: translateX(-400px) }
  70% { transform: translateY(-500px) }
  80% { transform: translateY(400px) }
  85% { transform: translateY(-400px) }
  90% { ransform: translateX(400px) }
  100% { transform: translateY(-600px) }
`;

export const ButtonFive = styled(Button)`
  position: absolute;
  bottom: 50%;
  left: 50%;
  background-color: #f58634;
  width: 80px;
  height: 80px;
  animation: ${animationFive} 10s linear infinite alternate-reverse;
`;
