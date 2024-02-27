import React, {useState, useEffect} from 'react';
import './App.css';
import './config/firebase.js';
import {words} from './words.js';
import { onLog } from 'firebase/app';

function App() {

  var guessesLeft = 5;
  var guessesUsed = 0;
  let word = "";
  var row = 1;
  var col= 0;

  

  const getWords = async () => {
    var num =Math.floor(Math.random() * 2309);
    word = words[num];
    console.log(word);
    
  }

  const resetBoxes = async () => {
    var guessesLeft = 5;
    var guessesUsed = 0;
    let word = "";

      var row = 0;
    var col= 0;

    for(row = 1; row < 6; row++){
      for(col = 1; col < 6; col++){
        document.getElementById("1." + col).style.backgroundColor = "white";
        document.getElementById("1." + col).ariaReadOnly = true;
      }
    }
    
  };



  const Reset = async () => {
    resetBoxes();
    getWords();
  };

  useEffect(() => {
    Reset();
  }, []);

  const Submit = async () => {

      
    

      for(col = 1; col < 6; col++){
        
        var cell = document.getElementById(row + "." + col);
        
         if(word.includes(cell.value) && cell.value.toLowerCase() !== word.charAt(col - 1) && cell.value !== ""  ){
          cell.style.backgroundColor = "yellow";
          cell.ariaReadOnly = true;
        }
        else if(cell.value.toLowerCase() === word.charAt(col - 1) && cell.value !== "" ){
          cell.style.backgroundColor = "green";
          cell.ariaReadOnly = true;
        }
        else if(cell.value !== "" ){
          cell.style.backgroundColor = "red";
          cell.ariaReadOnly = true;
        }
      }

      for(col = 1; col < 6; col++){
        if(guessesUsed === row){
          document.getElementById(row + "." + col).ariaReadOnly = true;
          var nextRow = row + 1;
          document.getElementById(nextRow + "." + col).ariaReadOnly = false;
        }
      }

    guessesLeft = guessesLeft - 1;
    guessesUsed = guessesUsed + 1;
    row = row + 1;
    col = col + 1;
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
          <input className="game-board-cell" maxlength="1" id="1.1"/>
          <input className="game-board-cell" maxlength="1" id="1.2"/>
          <input className="game-board-cell" maxlength="1" id="1.3"/>
          <input className="game-board-cell" maxlength="1" id="1.4"/>
          <input className="game-board-cell" maxlength="1" id="1.5"/>
        </div>
        <div className="game-board-row" id="2">
          <input className="game-board-cell" maxlength="1"  id="2.1"/>
          <input className="game-board-cell" maxlength="1"  id="2.2"/>
          <input className="game-board-cell" maxlength="1"  id="2.3"/>
          <input className="game-board-cell" maxlength="1"  id="2.4"/>
          <input className="game-board-cell" maxlength="1"  id="2.5"/>
        </div>
        <div className="game-board-row" id="3">
          <input className="game-board-cell" maxlength="1"  id="3.1"/>
          <input className="game-board-cell" maxlength="1"  id="3.2"/>
          <input className="game-board-cell" maxlength="1"  id="3.3"/>
          <input className="game-board-cell" maxlength="1"  id="3.4"/>
          <input className="game-board-cell" maxlength="1"  id="3.5"/>
        </div>
        <div className="game-board-row" id="4">
          <input className="game-board-cell" maxlength="1"  id="4.1"/>
          <input className="game-board-cell" maxlength="1"  id="4.2"/>
          <input className="game-board-cell" maxlength="1"  id="4.3"/>
          <input className="game-board-cell" maxlength="1"  id="4.4"/>
          <input className="game-board-cell" maxlength="1"  id="4.5"/>
        </div>
        <div className="game-board-row" id="5">
          <input className="game-board-cell" maxlength="1"  id="5.1"/>
          <input className="game-board-cell" maxlength="1"  id="5.2"/>
          <input className="game-board-cell" maxlength="1"  id="5.3"/>
          <input className="game-board-cell" maxlength="1"  id="5.4"/>
          <input className="game-board-cell" maxlength="1"  id="5.5"/>
        </div>
        <div className="game-board-row">
          <button className="game-board-cell" onClick={Submit}>Submit</button>
          <button className="game-board-cell" onClick={Reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;