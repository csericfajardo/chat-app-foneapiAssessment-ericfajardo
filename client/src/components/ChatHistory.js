import React from 'react';

function ChatHistory({ messages }) {
  return (
    <div>
      <h2>Chat History</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.username}</strong>: {message.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatHistory;