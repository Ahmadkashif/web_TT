import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Jumbo1 from './jumbo1_homepage/jumbo1'
import Navbar from './navbar/navbar'
import OverView from './OverView/overview'
import WWeDo from './WhatWedo/whatWedo'
import Footer from './footer/footer'
import './app.css';

// import './Assests/';
// import Card from "./Components/Cards"

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
           <Navbar/>
           <div className="">
           <Jumbo1/>
           <OverView/>
           </div>
           <WWeDo/>
           <Footer/>
        </div>
        </BrowserRouter>
    );

  };
}

export default App;

