import React, { useState } from "react";
import makeApiCall from "../../utils/apiCall";

const MessageToUser = ({ message }) => {
  const [messageText, setmessageText] = useState(message.message);
  const handleMessage = () => {
    try {
      makeApiCall("PUT", "messageuser", {
        message: messageText,
        course: message.course_id.toString(),
      }).then((data) => {
        console.log(data);
        if (data) {
          if (data.success) alert("message sent");
        } else {
          alert("No internet connection");
        }
      });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="message-to-user">
      <div className="container">
        <div className="heading">Message to student's dashboard</div>
        <div className="helper-message">You can include html elements here</div>
        <textarea
          type="text"
          name="message"
          id=""
          value={messageText}
          placeholder="Give a message dirctly to your student's dashboard"
          onChange={(e) => setmessageText(e.target.value)}
        />
        <div className="send-cta" onClick={handleMessage}>
          Send
        </div>
      </div>
    </div>
  );
};

export default MessageToUser;
