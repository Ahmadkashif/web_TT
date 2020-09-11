import React, { Component } from 'react';
import {Route, Router,Switch} from 'react-router-dom'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import HomePage from './HomePage/HomePage'
import AboutPage from './AboutPage/Aboutpage'
import ContactUsPage from './ContactUs/ContactUs'
import './app.css';

// import './Assests/';
// import Card from "./Components/Cards"

class App extends Component {
  render() {

    return (
        <div>
           <Navbar/>
           <Switch>
           <Route path = "/" exact component= {HomePage}/>
           <Route path = "/aboutus" exact component= {AboutPage}/>
           <Route path = "/contactus" exact component= {ContactUsPage}/>
           </Switch>
           <Footer/>
        </div>

    );

  };
}

export default App;

