import React, { useState } from 'react';

function ChatComposer({ onSendMessage }) {
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSendMessage(message);
    setMessage('');
  }

  return (
    <div>
      <h2>Chat Composer</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Message:
          <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatComposer;