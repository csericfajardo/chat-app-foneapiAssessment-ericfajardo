import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    onLogin(username);
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
