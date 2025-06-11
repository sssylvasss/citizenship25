import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { FaTimes } from "react-icons/fa";

import audio from "../../assets/Whoosh 6110_64_1.wav";
import { getCitizenUrl } from "../../reusables/urls";
import { MessageForm } from "./MessageForm";
import {
  MessageContainer,
  CloseIcon,
  MessageTitle,
  MessageList,
  MessageBox,
  ImageUserBox,
  TextBox,
  MessageText,
  MessageCreated,
  CitizenAvatar,
  Username,
} from "./Styling";

export const MessageBoard = ({ onClick }) => {
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const userId = useSelector((store) => store.profile.userId);
  const accessToken = useSelector((store) => store.profile.accessToken);

  // Fetch all messages
  const fetchMessages = () => {
    fetch(getCitizenUrl("citizenmessage"))
      .then((res) => res.json())
      .then((message) => setMessageList(message.citizenMessage))
      .catch((err) => alert(`Error: ${err}`));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Post message
  const handleMessageSubmit = (e) => {
    e.preventDefault();

    new Audio(audio).play();
    fetch(getCitizenUrl(`citizenmessage/${userId}`), {
      method: "POST",
      body: JSON.stringify({ message: newMessage }),
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    })
      .then((res) => res.json())
      .then(() => {
        setNewMessage("");
        fetchMessages();
      })
      .catch((err) => alert(`Error: ${err}`));
  };

  return (
    <MessageContainer>
      <CloseIcon>
        <FaTimes onClick={onClick} />
      </CloseIcon>
      <MessageTitle>Citizens Messageboard</MessageTitle>
      <MessageList>
        {messageList.map((message, index) => (
          <MessageBox key={index}>
            <ImageUserBox>
              <CitizenAvatar
                src={require(`../../assets/${message.user.avatar}.png`)}
              />
              <Username>{message.user.username}</Username>
            </ImageUserBox>
            <TextBox>
              <MessageText>{message.message}</MessageText>
              <MessageCreated>
                {moment(message.createdAt).fromNow()}
              </MessageCreated>
            </TextBox>
          </MessageBox>
        ))}
      </MessageList>
      <MessageForm
        handleSubmit={handleMessageSubmit}
        newMessage={newMessage}
        handleChange={(e) => setNewMessage(e.target.value)}
      />
    </MessageContainer>
  );
};
