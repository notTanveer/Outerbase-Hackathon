import React from "react";

const Message = ({ message }) => {
  return (
    <div className="message-container">
      <div className="heading">Message from instructor</div>
      <div
        className="message-wrapper"
        dangerouslySetInnerHTML={{ __html: message }}
      ></div>
    </div>
  );
};

export default Message;
