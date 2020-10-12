import React , {Component} from 'react'
import G1 from '../../../../images/Pages/GameDev/Gamedev1.png'
import UiDesigner from '../../../../images/Pages/IconsWebUiDigi/UI_UX designers.png'
import TextureArt from '../../../../images/Pages/IconsWebUiDigi/Texture artists.png'
import EffectsArt from '../../../../images/Pages/IconsWebUiDigi/Effects artists.png'
import ThreeD from '../../../../images/Pages/IconsWebUiDigi/3D Modellers.png'
import Rigger from '../../../../images/Pages/IconsWebUiDigi/Riggers.png'
import Animators from '../../../../images/Pages/IconsWebUiDigi/Animators.png'
import Jumbo1 from '../../Jumbo1/Jumbo1'
import '../../Jumbo1/Jumbo1.css'
import '../Pages.css'
class UIUXDev extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render(){
        return(
            <div>
            <Jumbo1 title = {"UI/UX Design"}/>
            
            <div className = "jumbotron">
            
            <p className = "container">As expert UI designers we ensure that a user interacts with the game/app seamlessly while as UX designers we ensure those interactions are relishing and intuitive. We curate our UI/UX design such that it arrests the users’ attention which makes them persistent users and subsequently converts them into potential customers.</p>
            <div className = "row">
                <div className = "col-xl-4 col-lg-4 col-md-12 col-sm-12 w-100 uiuxDevPageMainImage">

                </div>
                <div className = "col-xl-8 col-lg-8 col-md-12 col-sm-12 ContentColumn">
                        <div className = "row container">
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                                <div className = "pageCard d-flex flex-column justify-content-center my-auto">
                                    <div className = "row">
                                        <div className = "col-xl-3 col-lg-3 col-sm-3 col-md-3">
                                            <img className = "pageCardImg" src = {UiDesigner}/>
                                        </div>
                                        <div className = "col-xl-9 col-lg-9 col-sm-9 col-md-9 d-flex flex-column justify-content-center">
                                        <h1 className = " text-center  topRowHeading d-flex justify-content-center">
                                            <strong>UI/UX designers</strong>
                                        </h1>
                                        <p className = "text-center pageCardPara">We have some of the best UI/UX designers and their work is crucial because the initial user interaction is through their work</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                            <div className = "pageCard d-flex flex-column justify-content-center my-auto">
                                    <div className = "row">
                                        <div className = "col-xl-3 col-lg-3 col-sm-3 col-md-3">
                                            <img className = "pageCardImg" src = {TextureArt}/>
                                        </div>
                                        <div className = "col-xl-9 col-lg-9 col-sm-9 col-md-9 d-flex flex-column justify-content-center">
                                        <h1 className = "text-center   topRowHeading d-flex justify-content-center">
                                            <strong>Texture artists</strong>
                                        </h1>
                                        <p className = "text-center pageCardPara">Our texture artists are some of the best in the industry. They add textures to characters, game items and environments</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "row  container">
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                            <div className = "pageCard d-flex flex-column justify-content-center my-auto">
                                    <div className = "row">
                                        <div className = "col-xl-3 col-lg-3 col-sm-3 col-md-3">
                                            <img className = "pageCardImg" src = {EffectsArt}/>
                                        </div>
                                        <div className = "col-xl-9 col-lg-9 col-sm-9 col-md-9 d-flex flex-column justify-content-center">
                                        <h1 className = " text-center  topRowHeading d-flex justify-content-center">
                                            <strong>Effects artists</strong>
                                        </h1>
                                        <p className = "text-center pageCardPara">Our effects artists work effortlessly on a combination of 2D and 3D tools, lights and particle tools and bringing any virtual area to life</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                                 <div className = "pageCard d-flex flex-column justify-content-center my-auto">
                                    <div className = "row">
                                        <div className = "col-xl-3 col-lg-3 col-sm-3 col-md-3">
                                            <img className = "pageCardImg" src = {ThreeD}/>
                                        </div>
                                        <div className = "col-xl-9 col-lg-9 col-sm-9 col-md-9 d-flex flex-column justify-content-center">
                                        <h1 className = " text-center  topRowHeading d-flex justify-content-center">
                                            <strong>3D Modellers</strong>
                                        </h1>
                                        <p className = "text-center pageCardPara">Our 3D modellers create the characters, environments and objects including life forms, scenery, vegetation, vehicles etc</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "row  container">
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                            <div className = "pageCard d-flex flex-column justify-content-center my-auto">
                                    <div className = "row">
                                        <div className = "col-xl-3 col-lg-3 col-sm-3 col-md-3">
                                            <img className = "pageCardImg" src = {Rigger}/>
                                        </div>
                                        <div className = "col-xl-9 col-lg-9 col-sm-9 col-md-9 d-flex flex-column justify-content-center">
                                        <h1 className = "  text-center topRowHeading d-flex justify-content-center">
                                            <strong>Riggers</strong>
                                        </h1>
                                        <p className = "text-center pageCardPara">Our riggers make a skeleton for a 3D/2D model for it to be animated. Without a rig a character can’t be deformed and moved around</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                                 <div className = "pageCard d-flex flex-column justify-content-center my-auto">
                                    <div className = "row">
                                        <div className = "col-xl-3 col-lg-3 col-sm-3 col-md-3">
                                            <img className = "pageCardImg" src = {Animators}/>
                                        </div>
                                        <div className = "col-xl-9 col-lg-9 col-sm-9 col-md-9 d-flex flex-column justify-content-center">
                                        <h1 className = " text-center  topRowHeading d-flex justify-content-center">
                                            <strong>Animators</strong>
                                        </h1>
                                        <p className = "text-center pageCardPara">Our animators are well versed with all kinds of 2D and 3D animations</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "row container">
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12"></div>
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12"></div>
                        </div>
                </div>
            </div>
        </div>
        </div>
        )
    }
}
export default UIUXDev;