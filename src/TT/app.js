import React, { Component } from 'react';
import Jumbo1 from './jumbo1_homepage/jumbo1'
import Navbar from './navbar/navbar'
import OverView from './OverView/overview'
import WWeDo from './WhatWedo/whatWedo'
import './app.css';

// import './Assests/';
// import Card from "./Components/Cards"

class App extends Component {
  render() {

    return (
        <div>
           <Navbar/>
           <div className="">
           <Jumbo1/>
           <OverView/>
           </div>
           <WWeDo/>
        </div>
    );

  };
}

export default App;

