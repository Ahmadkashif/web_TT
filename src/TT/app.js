import React, { Component } from 'react';

import Navbar from './navbar/navbar'
// import './App.css';
// import Card from "./Components/Cards"

class App extends Component {
  render() {

    return (
        <div>
           <Navbar/>
        </div>
    );
    
  };
}

export default App;

{/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <div>
            <Card/>
          </div>
        </header>
        <p className="App-intro text">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */}