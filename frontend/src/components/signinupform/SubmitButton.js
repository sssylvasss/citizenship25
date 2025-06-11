import { Button, ButtonSignIn } from "./Styling";

export const SubmitButton = ({ onClick, text }) => {
  return (
    <Button type="submit" onClick={onClick}>
      {text}
    </Button>
  );
};

export const SubmitButtonSignIn = ({ onClick, text }) => {
  return (
    <ButtonSignIn type="submit" onClick={onClick}>
      {text}
    </ButtonSignIn>
  );
};
