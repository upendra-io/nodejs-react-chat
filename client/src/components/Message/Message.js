import React from "react";
import "./Message.css";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  let dark = localStorage.getItem("dark");
  dark = JSON.parse(dark);

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div
        className={
          dark
            ? "messageBox rec backgroundDark"
            : "messageBox rec backgroundLight"
        }
      >
        <p
          className={dark ? "messageText colorWhite" : "messageText colorDark"}
        >
          {text}
        </p>
      </div>
      <p className="sentText pl-10">{user}</p>
    </div>
  );
};

export default Message;
