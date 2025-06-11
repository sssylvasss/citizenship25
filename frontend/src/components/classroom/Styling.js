import styled from "styled-components";

//MathGame - Main page
export const MainContainer = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  padding-top: 10px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
`;

export const MathContainer = styled.div`
  margin: 200px 20px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.primary};
  border: 4px solid ${(props) => props.theme.secondary};
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

export const TimerContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;
`;

export const MathProblem = styled.h2`
  color: ${(props) => props.theme.textColor};
  text-align: center;
  font-size: 32px;
  ${(props) => (props.wrongAnswer ? `color: red; transform: scale(1.2)` : ``)}
`;

export const StatusText = styled.p`
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  font-size: 14px;
`;

// MathForm
export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

export const Input = styled.input`
  padding: 7px;
  background-color: ${(props) => props.theme.primary};
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.textColor};
  outline: none;
  font-size: 14px;
  font-family: "Trispace";
  :focus {
    background-color: ${(props) => props.theme.secondary};
  }
`;

// MathStart
export const StartContainer = styled.div`
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

export const Text = styled.h2`
  text-align: center;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

// Buttons
export const Button = styled.button`
  padding: 7px;
  margin-top: 20px;
  margin: 0 5px;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.textColor};
  font-size: 13px;
  text-transform: uppercase;
  font-family: "Trispace";
  :hover {
    background-color: ${(props) => props.theme.hover};
  }
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 10px 15px;
  }
`;

export const SendButton = styled(Button)`
  padding: 10px 10px;
  font-size: 14px;
`;

export const CollectButton = styled(Button)`
  padding: 10px 15px;
  margin-top: 10px;
  background-color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.hover};
`;
