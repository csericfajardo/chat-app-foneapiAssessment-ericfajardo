import React, { useState } from 'react';
import io from 'socket.io-client';
import UserList from './UserList';
import ChatBox from './ChatBox.js';

const socket = io('http://localhost:3000');

function App() {
  const [username, setUsername] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    socket.emit('login', username);
  }

  return (
    <div>
      {username ? (
        <>
          <UserList />
          <ChatBox username={username} />
        </>
      ) : (
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
          </label>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default App;
