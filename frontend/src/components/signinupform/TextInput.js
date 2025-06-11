import { Input, InputSignIn } from "./Styling";

// Input for signing up
export const TextInput = ({
  type,
  placeholder,
  value,
  onChange,
  minLength,
}) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      minLength={minLength}
      required
    ></Input>
  );
};

// Input for signing in
export const TextInputSignIn = ({ type, placeholder, value, onChange }) => {
  return (
    <InputSignIn
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></InputSignIn>
  );
};
