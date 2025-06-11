import { SubmitButton } from "./SubmitButton";
import { Form, Input } from "./Styling";

export const NumberInput = ({ handleSubmit, answerField, value, onChange }) => {
  return (
    <Form onSubmit={handleSubmit} action="">
      <Input
        ref={answerField}
        value={value}
        onChange={onChange}
        type="text"
        autoComplete="off"
        placeholder="Type answer"
      />
      <SubmitButton />
    </Form>
  );
};
