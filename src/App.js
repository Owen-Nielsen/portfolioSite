import React from 'react';
import './App.css';
import './config/firebase.js';




function App() {
  return (
    <div className="App">
      <div className="top-bar">
        <div className="user-profile">User Profile</div>
        This is the top bar
        <button className="top-bar-button">Click me</button>
      </div>
      <div className="info-grid">
        <div className="grid-item">Info 1</div>
        <div className="grid-item">Info 2</div>
        <div className="grid-item">Info 3</div>
        {/* Add more grid items as needed */}
      </div>
      {/* Rest of your app goes here */}
    </div>
  );
}

export default App;