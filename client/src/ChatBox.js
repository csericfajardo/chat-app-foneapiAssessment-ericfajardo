import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

function ChatBox({ username }) {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    socket.on('chat message', (username, message) => {
      setMessages((prevMessages) => [...prevMessages, { username, message }]);
    });
  }, []);
        
        function handleSendMessage(event) {
        event.preventDefault();
        socket.emit('chat message', messageText);
        setMessageText('');
        }
        
        return (
        <div>
        <h2>Chat</h2>
        <ul>
        {messages.map((message, index) => (
        <li key={index}>
        <strong>{message.username}:</strong> {message.message}
        </li>
        ))}
        </ul>
        <form onSubmit={handleSendMessage}>
        <label>
        Message:
        <input type="text" value={messageText} onChange={(event) => setMessageText(event.target.value)} />
        </label>
        <button type="submit">Send</button>
        </form>
        </div>
        );
        }
        
        export default ChatBox;