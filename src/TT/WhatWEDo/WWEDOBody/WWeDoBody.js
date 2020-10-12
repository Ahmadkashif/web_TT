import React , {Component } from 'react'
import  {Route, Router,Switch} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import './WWEDoBody.css'
class Body extends Component{
    
    render(){
        return(
            <div className = "container">
                <div className = "d-flex justify-content-center WWeDoVrtSpace">
                    <p className = "display-4 WWedoBody_Main_para">
                    We provide an end-to-end game and app development service where our designers,
                     developers and marketing professionals will make your project a success.
                    </p>
                </div>

                <div className = "services WWeDoVrtSpace">
                    <h1 className = "container display-4 d-flex justify-content-center WWeDoTextAlign animate__animated animate__pulse animate__delay-2s">Services We Provide</h1>
                    <div className = "row">
                        <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
                         <div className = "GameDev card-img-top ">
                            <div className= "WWeDoVrtSpace blackOverlay WWEDOPageCardShadow">
                            <div className = "WWEDOvrtAlign d-flex flex-column">
                                    <h3 className = "d-flex flex-column justify-content-center display-4 WWeDoBodyHeading  mt-5 animate__pulse">
                                        <strong>Game Development</strong>
                                    </h3>
                                    <div className = "d-flex  flex-column justify-content-center WWEDOvrtAlign">
                                    <div className = "d-flex justify-content-center container">
                                        <p className = "d-flex justify-content-center w-100 WWEDOPara"> Building games from scratch to finish. We craft futuristic games
                                         that can transform your game idea into reality.
                                        </p> 
                                    </div>
                                    <div className = "d-flex  justify-content-center">
                                    <NavLink className="WWEDOCustBtn" role = "button" to="/gameDev" exact  >Learn more</NavLink>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-12">
                         <div className = "AppDev">
                            <div className= "WWeDoVrtSpace blackOverlay WWEDOPageCardShadow">
                                <div className = "WWEDOvrtAlign d-flex flex-column">
                                <h3 className = " d-flex flex-column justify-content-center display-4 WWeDoBodyHeading  mt-5">
                                        <strong>App Development</strong>
                                    </h3>
                                    <div className = "d-flex  flex-column justify-content-center WWEDOvrtAlign">
                                    <div className = "d-flex justify-content-center container">
                                        <p className = "d-flex justify-content-center w-100 WWEDOPara"> We deliver next-generation 
                                        iPhone & Android applications to meet the most demanding customer requirements
                                        </p> 
                                    </div>
                                    <div className = "d-flex  justify-content-center">
                                    <NavLink className="WWEDOCustBtn" role = "button" to="/appDev" exact  >Learn more</NavLink>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12">
                         <div className = "webDev card-img-top">
                            <div className= "WWeDoVrtSpace blackOverlay WWEDOPageCardShadow">
                            <div className = "WWEDOvrtAlign  d-flex flex-column">
                            <h3 className = " d-flex flex-column justify-content-center display-4 WWeDoBodyHeading  mt-5">
                                        <strong>Web Development</strong>
                                    </h3>
                                    <div className = "d-flex  flex-column justify-content-center WWEDOvrtAlign">
                                    <div className = "d-flex justify-content-center container">
                                        <p className = "d-flex justify-content-center w-100 WWEDOPara"> Our web services assure you to lift your business growth. We brand your digital occurrence user-friendly and consistent.
                                        </p> 
                                    </div>
                                    <div className = "d-flex  justify-content-center">
                                    <NavLink className="WWEDOCustBtn" role = "button" to="/webDev" exact  >Learn more</NavLink>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12">
                         <div className = "uiDev ">
                            <div className= "WWeDoVrtSpace blackOverlay WWEDOPageCardShadow">
                            <div className = "WWEDOvrtAlign  d-flex flex-column">
                            <h3 className = " d-flex flex-column justify-content-center display-4 WWeDoBodyHeading  mt-5">
                                        <strong>UI/UX Development</strong>
                                    </h3>
                                    <div className = "d-flex  flex-column justify-content-center WWEDOvrtAlign">
                                    <div className = "d-flex justify-content-center container">
                                        <p className = "d-flex justify-content-center w-100 WWEDOPara">Build the product you need.  Our UI/UX developers profusely interact with various interfaces to better develop apt UI/UX design.
                                        </p> 
                                    </div>
                                    <div className = "d-flex  justify-content-center">
                                    <NavLink className="WWEDOCustBtn" role = "button" to="/uiuxDev" exact  >Learn more</NavLink>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12">
                         <div className = "digiDev card-img-top">
                            <div className= "WWeDoVrtSpace blackOverlay WWEDOPageCardShadow">
                            <div className = "WWEDOvrtAlign d-flex flex-column">
                            <h3 className = " d-flex flex-column justify-content-center display-4 WWeDoBodyHeading  mt-5">
                                        <strong>Digital Marketing</strong>
                                    </h3>
                                    <div className = "d-flex  flex-column justify-content-center WWEDOvrtAlign">
                                    <div className = "d-flex justify-content-center container">
                                        <p className = "d-flex justify-content-center w-100 WWEDOPara"> Our methodology brings you a fusion of contemporary business basics with all new aroma of modern-day media technology.
                                        </p> 
                                    </div>
                                    <div className = "d-flex  justify-content-center">
                                    <NavLink className="WWEDOCustBtn" role = "button" to="/digiDev" exact  >Learn more</NavLink>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}
export default Body;