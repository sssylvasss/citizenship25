import styled from "styled-components";

// MessageForm
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const MessageInput = styled.textarea`
  font-size: 12px;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 317px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  padding: 10px 10px 20px 10px;
  outline: none;
  border-top: 2px solid ${(props) => props.theme.colors.secondary};
  border-left: none;
  border-bottom: none;
  border-right: none;
  ::placeholder {
    color: ${(props) => props.theme.colors.text};
  }
  :focus {
    background-color: ${(props) => props.theme.colors.background};
  }
  @media (max-width: 320px) {
    width: 277px;
  }
  @media (min-width: 768px) {
    width: 360px;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 5px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};
  border: 2px solid ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  font-family: "Trispace", serif;
  font-size: 15px;
  :hover,
  :focus {
    background-color: ${(props) => props.theme.colors.background};
  }
  @media (min-width: 768px) {
    padding: 7px;
    font-size: 16px;
  }
`;

//MessageBoard
export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.background};
  border-left: 3px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  padding: 10px;
`;

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CloseIcon = styled.button`
  position: absolute;
  top: 4px;
  right: 1px;
  background-color: transparent;
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};
  :hover,
  :focus {
    color: ${(props) => props.theme.colors.accent};
  }
  @media (max-width: 320px) {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    top: 7px;
    right: 5px;
  }
`;

export const MessageTitle = styled.h3`
  text-transform: uppercase;
  text-align: center;
  font-size: 18px;
  border-bottom: 2px solid ${(props) => props.theme.colors.accent};
  padding-bottom: 5px;
  @media (max-width: 320px) {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const MessageList = styled.div`
  width: 100%;
  overflow: scroll;
  height: 100vh;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    border: 2px solid ${(props) => props.theme.colors.secondary};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    :hover {
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const MessageBox = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  :last-of-type {
    margin-bottom: 100px;
  }
`;

export const ImageUserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
`;

export const TextBox = styled(ImageUserBox)`
  padding: 10px;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const MessageText = styled.p`
  font-size: 12px;
  margin: 0 0 5px 0;
  @media (max-width: 320px) {
    font-size: 11px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const MessageCreated = styled.p`
  font-size: 9px;
  width: 100%;
  margin: 0 15px 0 0;
  text-align: right;
  opacity: 0.7;
  @media (max-width: 320px) {
    font-size: 8px;
  }
  @media (min-width: 768px) {
    font-size: 11px;
  }
`;

export const CitizenAvatar = styled.img`
  height: 30px;
  width: 30px;
  padding: 2px;
  margin: 0 0 3px 0;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 50%;
  @media (min-width: 768px) {
    height: 36px;
    width: 36px;
  }
`;

export const Username = styled.p`
  font-size: 11px;
  margin: 0;
  color: ${(props) => props.theme.colors.text};
  :hover {
    color: ${(props) => props.theme.colors.accent};
  }
  @media (max-width: 320px) {
    font-size: 10px;
  }
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  position: relative;
  border-top: 2px solid ${(props) => props.theme.colors.secondary};
`;

export const Title = styled.h4`
  color: ${(props) => props.theme.colors.text};
  :hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const Input = styled.input`
  color: ${(props) => props.theme.colors.text};
  border: 2px solid ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px;
  margin: 5px 0;
  font-family: "Trispace", serif;
  :focus {
    background-color: ${(props) => props.theme.colors.background};
  }
`;

export const Message = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  border-bottom: 2px solid ${(props) => props.theme.colors.accent};
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  border: 2px solid ${(props) => props.theme.colors.secondary};
  padding: 5px;
  margin: 5px 0;
  background-color: ${(props) => props.theme.colors.secondary};
  :hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const DeleteButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;

export const DeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 300px;
`;

export const DeleteText = styled.p`
  font-size: 16px;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  padding-bottom: 5px;
`;

export const DeleteButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 10px;
`;

export const DeleteConfirmButton = styled.button`
  padding: 5px;
  margin: 0 5px;
  background-color: ${(props) => props.theme.colors.secondary};
  :hover {
    opacity: 0.8;
  }
`;
