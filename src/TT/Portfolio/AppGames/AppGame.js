import React ,{Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Route, Router,Switch} from 'react-router-dom'
import './AppGame.css'
import App1png from '../../../images/Portfolio/application1.jpg' 
import App2png from '../../../images/Portfolio/application2.jpg' 
import App3png from '../../../images/Portfolio/application3.jpg' 
import App4png from '../../../images/Portfolio/application4.jpg' 
import Game1png from '../../../images/Portfolio/scaryclown.jpg'
import Game2png from '../../../images/Portfolio/sirenhead.jpg'
import Game3png from '../../../images/Portfolio/presidentgame.jpg'
import Game4png from '../../../images/Portfolio/scaryclown.jpg'
import Adapter from '../Aapter/Adapter'
import DetailView from '../DetailView/DetailView'

class AppGame extends Component{
    state = {
        App:{
            titles:[],
            pngs:[App1png,App2png,App3png,App4png]
        },
        Game:{
            titles:["ScaryClown"],
            pngs:[Game1png,Game2png,Game3png,Game4png],
            Gplay:[""],
            Descrp:[""]
        }
    };
    state1 = {
        title:"hello",
        utubeUrl:"",
        shrtDesc:"",
        desc:"",
        googlePlay:"",
        appleStore:""
    }
    setStateHandler = ()=> this.state1;


    render(){
        return(
            
            <div className = "container mb-5">
                <div className = "row  pl-1 pr-1 m-1">
                    <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center pt-2">
                    <a className = "portfolioViewProductLink" href = "/game1Detail">
                        <div className = "AppGame">
                        <div className = "Game1">
                            <div className = "overlay blackOverlay d-flex flex-column justify-content-center">
                                <h1 className = " display-4 overlayText ProductName">
                                    Scary Clown
                                </h1>
                                <h1 className = "display-4 overlayText">
                                    <strong>View Product</strong>
                                    </h1>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>
                    <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center pt-2">
                    <a className = "portfolioViewProductLink"  disabled>
                        <div className = "AppGame">
                        <div className = "App1">
                            <div className = "overlay blackOverlay d-flex flex-column justify-content-center">
                                <h1 className = " display-4 overlayText ProductName">
                                    Shophood
                                </h1>
                                <h1 className = "display-4 overlayText">
                                    <strong>View Product</strong>
                                    </h1>
                            </div>
                        </div>
                        </div>
                        </a>
                        </div>
                  
                    <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center pt-2">
                    <a className = "portfolioViewProductLink" href = "/game2Detail">
                        <div className = "AppGame">
                        <div className = "Game2">
                            <div className = "overlay blackOverlay d-flex flex-column justify-content-center">
                                <h1 className = " display-4 overlayText ProductName">
                                    Siren Head
                                </h1>
                                <h1 className = "display-4 overlayText">
                                    <strong>View Product</strong>
                                    </h1>
                            </div>
                        </div>
                        </div>
                        </a>
                    </div>
                    
                </div>
                <div className = "row pl-1 pr-1 m-1">

                    <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center pt-2">
                    <a className = "portfolioViewProductLink" >
                        <div className = "AppGame">
                        <div className = "App2">
                            <div className = "overlay blackOverlay d-flex flex-column justify-content-center">
                                <h1 className = " display-4 overlayText ProductName">
                                    Seeksi
                                </h1>
                                <h1 className = "display-4 overlayText">
                                    <strong>View Product</strong>
                                    </h1>
                            </div>
                        </div>
                        </div>
                        </a>
                    </div>
                    <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center pt-2">
                    <a className = "portfolioViewProductLink" href = "/game3Detail">
                        <div className = "AppGame">
                        <div className = "Game3">
                            <div className = "overlay blackOverlay d-flex flex-column justify-content-center">
                                <h1 className = " display-4 overlayText ProductName">
                                    Light Head
                                </h1>
                                <h1 className = "display-4 overlayText">
                                    <strong>View Product</strong>
                                    </h1>
                            </div>
                        </div>
                        </div>
                        </a>
                    </div>
                    <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center pt-2">
                    <a className = "portfolioViewProductLink" href = "/game4Detail">
                        <div className = "AppGame">
                        <div className = "Game4">
                            <div className = "overlay blackOverlay d-flex flex-column justify-content-center">
                                <h1 className = " display-4 overlayText ProductName">
                                    Protect The President Game
                                </h1>
                                <h1 className = "display-4 overlayText">
                                    <strong>View Product</strong>
                                    </h1>
                            </div>
                        </div>
                        </div>
                        </a>
                    </div>

                </div>

                <div className = "row  pl-1 pr-1 m-1">

                    <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center pt-2">
                    <a className = "portfolioViewProductLink" >
                        <div className = "AppGame">
                        <div className = "App3">
                            <div className = "overlay blackOverlay d-flex flex-column justify-content-center">
                                <h1 className = " display-4 overlayText ProductName">
                                    StreamIt
                                </h1>
                                <h1 className = "display-4 overlayText">
                                    <strong>View Product</strong>
                                    </h1>
                            </div>
                        </div>
                        </div>
                        </a>
                    </div>
                    <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center pt-2">
                    <a className = "portfolioViewProductLink" href = "/game5Detail">
                        <div className = "AppGame">
                        <div className = "Game5">
                            <div className = "overlay blackOverlay d-flex flex-column justify-content-center">
                                <h1 className = " display-4 overlayText ProductName">
                                    Virtual School
                                </h1>
                                <h1 className = "display-4 overlayText">
                                    <strong>View Product</strong>
                                    </h1>
                            </div>
                        </div>
                        </div>
                        </a>
                        </div>
                  
                    <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center pt-2">
                    <a className = "portfolioViewProductLink" >
                        <div className = "AppGame">
                        <div className = "App4">
                            <div className = "overlay blackOverlay d-flex flex-column justify-content-center">
                                <h1 className = " display-4 overlayText ProductName">
                                    Yank App
                                </h1>
                                <h1 className = "display-4 overlayText">
                                    <strong>View Product</strong>
                                    </h1>
                            </div>
                        </div>
                        </div>
                        </a>
                    </div>
                    
                </div>


            </div>
           
           
        )
    }
}
export default AppGame;