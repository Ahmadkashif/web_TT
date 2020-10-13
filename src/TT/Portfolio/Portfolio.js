import React , {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Route, Router,Switch} from 'react-router-dom'
import './Portfolio.css'
import Jumbo1 from './Portfolio_MainPage/PT_jumbo1/PT_jumbo1'
import ComponentDesc from './ComponentDesc/ComponentDesc'
import NavComp from './NavComp/NavComp'
import AppGame from './AppGames/AppGame'
import Apps from './Apps/Apps'
import Games from './Games/Games'
// 
// Now just add the card component
class Portfolio extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
      }
   render(){
       return(
           <div className = "portfolio">
               <BrowserRouter>
               <Jumbo1/>
               <h1 className= "display-3 d-flex justify-content-center mt-5 mb-0">
                        Our Work
                </h1>
        
               <ComponentDesc/>
               <NavComp/>              
                   <Route path = "/portfolio/AppGame" exact component = {AppGame}/>
                   <Route path = "/portfolio/Apps" exact component = {Apps}/>
                   <Route path = "/portfolio/Games" exact component = {Games}/>
                </BrowserRouter>
           </div>
       )
   } 
}
export default Portfolio;