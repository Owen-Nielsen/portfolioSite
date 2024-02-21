import React from 'react';
import './App.css';
import './config/firebase.js';

function App() {

  const guessesLeft = 5;
  let word = "";

  const words = ["space", "title"];

  const getWords = async () => {
    
    const num =Math.floor(Math.random() * 2);

     word = words[num];

  }

  window.onload = getWords();

  

  const Submit = async () => {
    console.log("Submit button clicked");
    if(guessesLeft === 5){
      let result1 =document.getElementById("1.1").value.toLowerCase();
      let result2 =document.getElementById("1.2").value.toLowerCase();
      let result3 =document.getElementById("1.3").value.toLowerCase();
      let result4 =document.getElementById("1.4").value.toLowerCase();
      let result5 =document.getElementById("1.5").value.toLowerCase();

      if(result1 === word[0]){
        document.getElementById("1.1").style.backgroundColor = "green";
      }
      if(result2 === word[1]){
        document.getElementById("1.2").style.backgroundColor = "green";
      }
      if(result3 === word[2]){
        document.getElementById("1.3").style.backgroundColor = "green";
      }
      if(result4 === word[3]){
        document.getElementById("1.4").style.backgroundColor = "green";
      }
      if(result5 === word[4]){
        document.getElementById("1.5").style.backgroundColor = "green";
      }
      
      document.getElementById("1.1").readOnly = true;
      document.getElementById("1.2").readOnly = true;
      document.getElementById("1.3").readOnly = true;
      document.getElementById("1.4").readOnly = true;
      document.getElementById("1.5").readOnly = true;
    }
    else if(guessesLeft === 4){
      let result1 =document.getElementById("2.1").value.toLowerCase();
      let result2 =document.getElementById("2.2").value.toLowerCase();
      let result3 =document.getElementById("2.3").value.toLowerCase();
      let result4 =document.getElementById("2.4").value.toLowerCase();
      let result5 =document.getElementById("2.5").value.toLowerCase();

      if(result1 === word[0]){
        document.getElementById("2.1").style.backgroundColor = "green";
      }
      if(result2 === word[1]){
        document.getElementById("2.2").style.backgroundColor = "green";
      }
      if(result3 === word[2]){
        document.getElementById("2.3").style.backgroundColor = "green";
      }
      if(result4 === word[3]){
        document.getElementById("2.4").style.backgroundColor = "green";
      }
      if(result5 === word[4]){
        document.getElementById("2.5").style.backgroundColor = "green";
      }
      
      document.getElementById("2.1").readOnly = true;
      document.getElementById("2.2").readOnly = true;
      document.getElementById("2.3").readOnly = true;
      document.getElementById("2.4").readOnly = true;
      document.getElementById("2.5").readOnly = true;
    }

    else if(guessesLeft === 3){
      let result1 =document.getElementById("3.1").value.toLowerCase();
      let result2 =document.getElementById("3.2").value.toLowerCase();
      let result3 =document.getElementById("3.3").value.toLowerCase();
      let result4 =document.getElementById("3.4").value.toLowerCase();
      let result5 =document.getElementById("3.5").value.toLowerCase();

      if(result1 === word[0]){
        document.getElementById("3.1").style.backgroundColor = "green";
      }
      if(result2 === word[1]){
        document.getElementById("3.2").style.backgroundColor = "green";
      }
      if(result3 === word[2]){
        document.getElementById("3.3").style.backgroundColor = "green";
      }
      if(result4 === word[3]){
        document.getElementById("3.4").style.backgroundColor = "green";
      }
      if(result5 === word[4]){
        document.getElementById("3.5").style.backgroundColor = "green";
      }
      
      document.getElementById("3.1").readOnly = true;
      document.getElementById("3.2").readOnly = true;
      document.getElementById("3.3").readOnly = true;
      document.getElementById("3.4").readOnly = true;
      document.getElementById("3.5").readOnly = true;
    }
    else if(guessesLeft === 2){
      let result1 =document.getElementById("4.1").value.toLowerCase();
      let result2 =document.getElementById("4.2").value.toLowerCase();
      let result3 =document.getElementById("4.3").value.toLowerCase();
      let result4 =document.getElementById("4.4").value.toLowerCase();
      let result5 =document.getElementById("4.5").value.toLowerCase();

      if(result1 === word[0]){
        document.getElementById("4.1").style.backgroundColor = "green";
      }
      if(result2 === word[1]){
        document.getElementById("4.2").style.backgroundColor = "green";
      }
      if(result3 === word[2]){
        document.getElementById("4.3").style.backgroundColor = "green";
      }
      if(result4 === word[3]){
        document.getElementById("4.4").style.backgroundColor = "green";
      }
      if(result5 === word[4]){
        document.getElementById("4.5").style.backgroundColor = "green";
      }
      
      document.getElementById("4.1").readOnly = true;
      document.getElementById("4.2").readOnly = true;
      document.getElementById("4.3").readOnly = true;
      document.getElementById("4.4").readOnly = true;
      document.getElementById("4.5").readOnly = true;
    }
    else if(guessesLeft === 1){
      let result1 =document.getElementById("5.1").value.toLowerCase();
      let result2 =document.getElementById("5.2").value.toLowerCase();
      let result3 =document.getElementById("5.3").value.toLowerCase();
      let result4 =document.getElementById("5.4").value.toLowerCase();
      let result5 =document.getElementById("5.5").value.toLowerCase();

      if(result1 === word[0]){
        document.getElementById("5.1").style.backgroundColor = "green";
      }
      if(result2 === word[1]){
        document.getElementById("5.2").style.backgroundColor = "green";
      }
      if(result3 === word[2]){
        document.getElementById("5.3").style.backgroundColor = "green";
      }
      if(result4 === word[3]){
        document.getElementById("5.4").style.backgroundColor = "green";
      }
      if(result5 === word[4]){
        document.getElementById("5.5").style.backgroundColor = "green";
      }
      
      document.getElementById("5.1").readOnly = true;
      document.getElementById("5.2").readOnly = true;
      document.getElementById("5.3").readOnly = true;
      document.getElementById("5.4").readOnly = true;
      document.getElementById("5.5").readOnly = true;
    }
    if(guessesLeft === 0){
      alert("You are out of guesses");
    }

    guessesLeft = guessesLeft - 1;
  }



  return (
    <div className="App">
      <div className="top-bar">
        <div className="user-profile">User Profile</div>
        This is the top bar
        <button className="top-bar-button">Click me</button>
      </div>
      <div className="info-grid">
        <button className="grid-item">Leaderboard</button>
        <button className="grid-item">Daily</button>
        <button className="grid-item">Infinite</button>
        {/* Add more grid items as needed */}
      </div>
      
      <br />

      <div className="game-board">
        <div className="game-board-row" id="1">
          <input className="game-board-cell" id="1.1"/>
          <input className="game-board-cell" id="1.2"/>
          <input className="game-board-cell" id="1.3"/>
          <input className="game-board-cell" id="1.4"/>
          <input className="game-board-cell" id="1.5"/>
        </div>
        <div className="game-board-row" id="2">
          <input className="game-board-cell" id="2.1"/>
          <input className="game-board-cell" id="2.2"/>
          <input className="game-board-cell" id="2.3"/>
          <input className="game-board-cell" id="2.4"/>
          <input className="game-board-cell" id="2.5"/>
        </div>
        <div className="game-board-row" id="3">
          <input className="game-board-cell" id="3.1"/>
          <input className="game-board-cell" id="3.2"/>
          <input className="game-board-cell" id="3.3"/>
          <input className="game-board-cell" id="3.4"/>
          <input className="game-board-cell" id="3.5"/>
        </div>
        <div className="game-board-row" id="4">
          <input className="game-board-cell" id="4.1"/>
          <input className="game-board-cell" id="4.2"/>
          <input className="game-board-cell" id="4.3"/>
          <input className="game-board-cell" id="4.4"/>
          <input className="game-board-cell" id="4.5"/>
        </div>
        <div className="game-board-row" id="5">
          <input className="game-board-cell" id="5.1"/>
          <input className="game-board-cell" id="5.2"/>
          <input className="game-board-cell" id="5.3"/>
          <input className="game-board-cell" id="5.4"/>
          <input className="game-board-cell" id="5.5"/>
        </div>
        <div className="game-board-row">
          <button className="game-board-cell" onClick={Submit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;