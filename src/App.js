import React, { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch('/login', { method: 'POST', body: JSON.stringify({ username }) })
      .then((res) => res.json())
      .then(setUserData);
  };

  if (userData) {
    return (
      <div>
        <h1>
          <span data-testid='firstName'>'{userData.firstName}</span>{' '}
          <span data-testid='lastName'>{userData.lastName}'</span>{' '}
          <span data-testid='username'>'{userData.username}'</span>
        </h1>
        <p data-testid='userId'>{userData.id}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input id='username' name='username' value={username} onChange={(event) => setUsername(event.target.value)} />
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default App;
