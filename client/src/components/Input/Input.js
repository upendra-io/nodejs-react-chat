import React from "react";

import { BiWinkSmile } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => {
  //  const [showPicker, setPickerState] = useState(false);

  //  const dismissPicker = useCallback(() => {
  //    setPickerState(false);
  //  }, [setPickerState]);

  //  const togglePicker = () => {
  //    setPickerState(!showPicker);
  //  };

  // const addEmoji = (e) => {
  //    let emoji = e.native;
  //    setMessage(emoji);
  //    dismissPicker();
  //  };
  //{showPicker && <Picker onSelect={addEmoji} />}
  //onClick={togglePicker}

  return (
    <form className="chat-form">
      <div className="msg-cont">
        <input
          className="input-msg"
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        />
      </div>

      <span className="e-picker">
        <BiWinkSmile size="40" />
      </span>

      <FiSend size="40" onClick={(e) => sendMessage(e)} className="send" />
    </form>
  );
};

export default Input;
