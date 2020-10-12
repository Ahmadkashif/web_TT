import React , {Component} from 'react'
import {Route, Router,Switch} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import './WWEdo.css'
import Jumbo1 from './Jumbo1/Jumbo1'
import Body from './WWEDOBody/WWeDoBody'

import GameDev from './Pages/GameDev/GameDevPage'
import AppDev from './Pages/AppDev/AppDev'
import WebDev from './Pages/WebDev/WebDev'
import UiUxDev from './Pages/UIUXDev/UIUxDev'
import DigiDev from './Pages/DIGIDev/DIGIDev'

import Platforms from './Platforms/Platforms'
import InTouch from './getInTouch/getInTouch'
class WWEDoPage extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    state= {
        currentState:""
    }
    render(){
        return(
            
            <div className = "darkmode">
               <Jumbo1 title = {"What we do"}/>
                 <Body/>
                <Platforms/>
                <InTouch/>
            </div>
           
        )
    }
}
export default WWEDoPage;