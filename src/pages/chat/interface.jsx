import React, { useState, useEffect } from "react";
import "./chat.scss";
import io from "socket.io-client";

function Chat() {
  const socket = io();

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("sendMessage", message);
      setMessage("");
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sent: true },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default Enter key behavior (e.g., line break)
      sendMessage();
    }
  };

  return (
    <div className="chat-app">
      <aside className="sidebar">
        <header className="sidebar-header">
          <h2>Online Users</h2>
        </header>
        <ul className="contact-list"></ul>
      </aside>
      <section className="chat-area">
        <header className="chat-header">
          <h2>ScholarSphere</h2>
        </header>
        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sent ? "sent" : "received"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            id="messageInput"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button id="sendButton" onClick={sendMessage}>
            Send
          </button>
        </div>
      </section>
    </div>
  );
}

export default Chat;
