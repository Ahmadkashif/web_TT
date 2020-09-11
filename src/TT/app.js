import React, { Component } from 'react';

import Jumbo1 from './HomePage/jumbo1_homepage/jumbo1'
import Navbar from './navbar/navbar'
import OverView from './HomePage/OverView/overview'
import WWeDo from './HomePage/WhatWedo/whatWedo'
import Footer from './footer/footer'
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
           <Footer/>
        </div>

    );

  };
}

export default App;

