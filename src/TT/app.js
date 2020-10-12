import React, { Component } from 'react';
import {Route, Router,Switch} from 'react-router-dom'
import {ScrollRestoration} from 'react'
import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import HomePage from './HomePage/HomePage'
import PortfolioPage from './Portfolio/Portfolio'
import AboutPage from './AboutPage/Aboutpage'
import ContactUsPage from './ContactUs/ContactUs'
import WWeDoPage from './WhatWEDo/WhatWEDo'
import DetailView from './Portfolio/DetailView/DetailView'
import Adapter from './Portfolio/Aapter/Adapter'
import './app.css';
import Game1 from './Portfolio/DetailView/Game1Detail/Game1Detail'
import Game2 from './Portfolio/DetailView/Game2Detail/Game2Detail'
import Game3 from './Portfolio/DetailView/Game3Detail/Game3Detail'
import Game4 from './Portfolio/DetailView/Game4Detail/Game4Detail'
import Game5 from './Portfolio/DetailView/Game5Detail/Game5Detail'
import gameDev from './WhatWEDo/Pages/GameDev/GameDevPage'
import appDev from './WhatWEDo/Pages/AppDev/AppDev'
import uiuxDev from './WhatWEDo/Pages/UIUXDev/UIUxDev'
import digiDev from './WhatWEDo/Pages/DIGIDev/DIGIDev'
import WebDev from './WhatWEDo/Pages/WebDev/WebDev';
import PrivacyPolicy from './privacyPolicy/privacyPolicy'
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
           <Route path = "/portfolio/AppGame" exact component= {PortfolioPage}/>
           <Route path = "/whatwedo/all" exact component = {WWeDoPage}/>
           <Route path = "/game1Detail" exact component = {Game1}/>
           <Route path = "/game2Detail" exact component = {Game2}/>
           <Route path = "/game3Detail" exact component = {Game3}/>
           <Route path = "/game4Detail" exact component = {Game4}/>
           <Route path = "/game5Detail" exact component = {Game5}/>
           <Route path = "/gameDev" exact component = {gameDev}/>
           <Route path = "/appDev" exact component = {appDev}/>
           <Route path = "/webDev" exact component = {WebDev}/>
           <Route path = "/uiuxDev" exact component = {uiuxDev}/>
           <Route path = "/digiDev" exact component = {digiDev}/>
           <Route path = "/portfolio/Apps" exact component= {PortfolioPage}/>
           <Route path = "/portfolio/Games" exact component= {PortfolioPage}/>
           <Route path = "/privacyPolicy" exact component= {PrivacyPolicy}/>
          </Switch>
           <Footer/>
        </div>

    );

  };
}
export default App;

