import React, { Component } from 'react';
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
             <ContactUsPage/>
           <Footer/>
        </div>

    );

  };
}

export default App;

