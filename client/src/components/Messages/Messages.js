import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

import Message from "../Message/Message";

import "./Messages.css";

const Messages = ({ messages, name }) => {
  let dark = localStorage.getItem("dark");
  dark = JSON.parse(dark);

  return (
    <ScrollToBottom className={dark ? "messages dk" : "messages"}>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
