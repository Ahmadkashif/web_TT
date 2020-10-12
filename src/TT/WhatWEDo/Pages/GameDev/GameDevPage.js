import React , {Component} from 'react'
import '../Pages.css'
import G1 from '../../../../images/Pages/ios game dev.png'
import AndGames from '../../../../images/Pages/android games.png'
import ARGames from '../../../../images/Pages/AR GAME DEVELOPMENT.png'
import onlineGames from '../../../../images/Pages/ONLINE GAME DEVELOPMENT COMPANY.png'
import corssGames from '../../../../images/Pages/CROSS-PLATFORM.png'
import oCCUGames from '../../../../images/Pages/OCULUS RIFT.png'
import PrePoduction from '../../../../images/Pages/icons_circle/preProduction.png'
import ConceptArt from '../../../../images/Pages/icons_circle/conceptArt.png'
import AssetProd from '../../../../images/Pages/icons_circle/assetProduction.png'
import Developing from '../../../../images/Pages/icons_circle/DEVELOPING.png'
import Testing from '../../../../images/Pages/icons_circle/testing.png'
import Support from '../../../../images/Pages/icons_circle/SUPPORT.png'
import Jumbo1 from '../../Jumbo1/Jumbo1'
class GameDev extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render(){
        return (
            <div>
                <Jumbo1 title = {"Game Development"}/>
            <div className = "jumbotron">
                <p className = "container">As a leading game design company our range of services covers everything from character design and game mechanics to coding, development and testing.  We adapt to the latest tools and frameworks in the market and work with game engines like Unity3D, Cocos2d-x and Unreal as well as technologies like HTML5 and others to build high quality games</p>
                <div className = "row">
                    <div className = "col-xl-4 col-lg-4 col-md-12 col-sm-12 w-100 GameDevPageMainImage">

                    </div>
                    <div className = "col-xl-8 col-lg-8 col-md-12 col-sm-12 ContentColumn">
                            <div className = "row container">
                                <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                                    <div className = "pageCard">
                                        <div className = "row d-flex flex-column">
                                            <div className = "d-flex flex-column justify-content-center my-auto">
                                            <div className = "col-xl-3 col-lg-3 col-sm-3 col-md-12">
                                                <img className = "pageCardImg" src = {G1}/>
                                            </div>
                                            <div className = "col-xl-9 col-lg-9 col-sm-9 col-md-12 ">
                                                <h1 className = "text-center topRowHeading d-flex justify-content-center">
                                                    <strong>iOS GAME DEVELOPMENT</strong>
                                                </h1>
                                                <p className = "pageCardPara">The surest way of developing jaw dropping apps in the most secure OS</p>
                                            </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                                <div className = "pageCard">
                                        <div className = "row">
                                            <div className = "col-xl-3 col-lg-3 col-sm-3 col-md-3">
                                                <img className = "pageCardImg" src = {AndGames}/>
                                            </div>
                                            <div className = "col-xl-9 col-lg-9 col-sm-9 col-md-9 d-flex flex-column justify-content-center">
                                            <h1 className = "   topRowHeading d-flex justify-content-center">
                                                <strong>ANDROID GAME DEVELOPMENT</strong>
                                            </h1>
                                            <p className = "pageCardPara">Our best android game developers are ever ready to develop highly engaging apps</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "row  container">
                                <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                                <div className = "pageCard">
                                        <div className = "row">
                                            <div className = "col-xl-3 col-lg-3 col-sm-3 col-md-3">
                                                <img className = "pageCardImg" src = {ARGames}/>
                                            </div>
                                            <div className = "col-xl-9 col-lg-9 col-sm-9 col-md-9 d-flex flex-column justify-content-center">
                                            <h1 className = "   topRowHeading d-flex justify-content-center">
                                                <strong>AR GAME DEVELOPMENT</strong>
                                            </h1>
                                            <p className = "pageCardPara">Developing out-of-the-box solutions in emerging 
                                            technologies is one of our many gifts.</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                                     <div className = "pageCard">
                                        <div className = "row">
                                            <div className = "col-xl-3 col-lg-3 col-sm-3 col-md-3">
                                                <img className = "pageCardImg" src = {onlineGames}/>
                                            </div>
                                            <div className = "col-xl-9 col-lg-9 col-sm-9 col-md-9 d-flex flex-column justify-content-center">
                                            <h1 className = "   topRowHeading d-flex justify-content-center">
                                                <strong>ONLINE GAME DEVELOPMENT COMPANY</strong>
                                            </h1>
                                            <p className = "pageCardPara">Get World class high quality online game development services with just a portal.
</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "row  container">
                                <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                                <div className = "pageCard">
                                        <div className = "row">
                                            <div className = "col-xl-3 col-lg-3 col-sm-3 col-md-3">
                                                <img className = "pageCardImg" src = {corssGames}/>
                                            </div>
                                            <div className = "col-xl-9 col-lg-9 col-sm-9 col-md-9 d-flex flex-column justify-content-center">
                                            <h1 className = "   topRowHeading d-flex justify-content-center">
                                                <strong>CROSS-PLATFORM GAME DEVELOPMENT
</strong>
                                            </h1>
                                            <p className = "pageCardPara">Reach a Wider Audience through Cross - Platform Games.
</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                                     <div className = "pageCard">
                                        <div className = "row">
                                            <div className = "col-xl-3 col-lg-3 col-sm-3 col-md-3">
                                                <img className = "pageCardImg" src = {oCCUGames}/>
                                            </div>
                                            <div className = "col-xl-9 col-lg-9 col-sm-9 col-md-9 d-flex flex-column justify-content-center">
                                            <h1 className = "   topRowHeading d-flex justify-content-center">
                                                <strong>OCULUS RIFT GAME DEVELOPMENT
</strong>
                                            </h1>
                                            <p className = "pageCardPara">Make learning fun with our Oculus game development services</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                    </div>
                </div>
                </div>
                <div className = "mt-5 container">
                    <h2 className = "d-flex justify-content-center OurProcess" text-align= "center">Our Process</h2>
                    <div className = "row mb-4 ">
                        <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className = " absSupport">
                                <div className="card WhyUsCard text-center">
                                    <div className="card-body d-flex flex-column justify-content-center">
                                    <img src = {AssetProd} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-2">ASSET PRODUCTION</h5>
                                        <p className="card-text">End to end 2D & 3D asset production services to bring your ideas to life, including illustration, modeling, texturing, animation, rigging and lighting.</p>
                                    </div>
                                </div>        
                            </div>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className = " absSupport">
                                <div className="card WhyUsCard text-center">
                                    <div className="card-body d-flex flex-column justify-content-center">
                                    <img src = {ConceptArt} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-2">CONCEPT ART</h5>
                                        <p className="card-text">A full-fledged art & design team including artists, level designers and UI specialists to make your games as engaging and user-friendly as possible.</p>
                                    </div>
                                </div>        
                            </div>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className = " absSupport">
                                <div className="card WhyUsCard text-center">
                                    <div className="card-body d-flex flex-column justify-content-center">
                                    <img src = {PrePoduction} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-2">PRE-PRODUCTION</h5>
                                        <p className="card-text">Planning, research and documentation based on the marketing analysis and genre studies, gameplay, target audience, platforms, estimated schedule & team requirements.
.</p>
                                    </div>
                                </div>        
                            </div>
                        </div>
                    </div>
                    <div className = "row mb-4 ">
                        <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className = " absSupport">
                                <div className="card WhyUsCard text-center">
                                    <div className="card-body d-flex flex-column justify-content-center">
                                    <img src = {Developing} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-2"> DEVELOPING</h5>
                                        <p className="card-text">We work with a wide variety of game engines, technologies and platforms depending on project needs.</p>
                                    </div>
                                </div>        
                            </div>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className = " absSupport">
                                <div className="card WhyUsCard text-center">
                                    <div className="card-body d-flex flex-column justify-content-center">
                                    <img src = {Testing} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-2">TESTING</h5>
                                        <p className="card-text">Rigorous QA and performance testing for device compatibility and superior user experience.</p>
                                    </div>
                                </div>        
                            </div>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className = " absSupport">
                                <div className="card WhyUsCard text-center">
                                    <div className="card-body d-flex flex-column justify-content-center">
                                    <img src = {Support} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-2">SUPPORT</h5>
                                        <p className="card-text">Content updates, bug fixes, maintenance and game release support along with support for marketing, launches, ad creation, app store optimization etc
.</p>
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
export default GameDev;