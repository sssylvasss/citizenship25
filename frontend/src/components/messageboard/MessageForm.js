import { Form, MessageInput, SubmitButton } from "./Styling";

export const MessageForm = ({ handleSubmit, newMessage, handleChange }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <MessageInput
        placeholder="Type your message.."
        rows="4"
        minLength="2"
        maxLength="140"
        required
        value={newMessage}
        onChange={handleChange}
      ></MessageInput>
      <SubmitButton type="submit">Send</SubmitButton>
    </Form>
  );
};
