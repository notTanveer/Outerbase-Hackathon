import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io();

function ChatApp() {
  const [username, setUsername] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Prompt for username (you can implement your own username input logic)
    const promptUsername = () => {
      let user = prompt("Please enter your username:");
      if (!user) {
        promptUsername();
      } else {
        setUsername(user);
        socket.emit("user joined", user);
      }
    };

    promptUsername();

    // Event listeners for socket messages
    socket.on("update userlist", (users) => {
      setOnlineUsers(users);
    });

    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    let message = messageInput.trim();

    if (message !== "") {
      socket.emit("chat message", message);
      setMessageInput("");
    }
  };

  return (
    <div className="App">
      <div className="user-list">
        <h2>Online Users</h2>
        <ul>
          {onlineUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatApp;
