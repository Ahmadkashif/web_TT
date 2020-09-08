import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./Components/Cards"


const app = (props) => {

  
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <div>
            <Card/>
          </div>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  
}

export default App;
