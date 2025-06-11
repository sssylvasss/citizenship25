import { ChangeText, ChangeLink, ChangeTextSignIn } from "./Styling";

export const ChangeLogIn = ({ text, link, linkText }) => {
  return (
    <ChangeText>
      {text}
      <ChangeLink to={link}>{linkText}</ChangeLink>
    </ChangeText>
  );
};

export const ChangeSignUp = ({ text, link, linkText }) => {
  return (
    <ChangeTextSignIn>
      {text}
      <ChangeLink to={link}>{linkText}</ChangeLink>
    </ChangeTextSignIn>
  );
};
