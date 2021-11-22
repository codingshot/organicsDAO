import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo}  alt="Mintcord Logo" /> */}
        <h1>OrganicsDAO</h1>
        <p>The DAO focused on wellness, health, and sourcing organic products.</p>
        <a
          // className="App-link"
          href="https://twitter.com/organicsDAO"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="discord-button">Join the Movement</button>
        </a>
      </header>
    </div>
  );
}

export default App;
