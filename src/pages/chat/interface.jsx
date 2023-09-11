import React from "react";
import "./chat.scss";


function Chat() {
    return (
        <body>
            <div class="chat-app">
            <aside class="sidebar">
                <header class="sidebar-header">
                <h2>Online Users</h2>
                </header>
                <ul class="contact-list">
                </ul>
            </aside>
            <section class="chat-area">
                <header class="chat-header">
                <h2>ScholarSphere</h2>
                </header>
                <div class="messages">
                <div class="message received">Hello there!</div>
                <div class="message sent">Hi, how are you?</div>
                </div>
                <div class="message-input">
                <input
                    type="text"
                    id="messageInput"
                    placeholder="Type a message..."
                />
                <button id="sendButton">Send</button>
                </div>
            </section>
            </div>
            <script src="/socket.io/socket.io.js"></script>
            <script src="script.js"></script>
        </body>

    );
}

export default Chat;