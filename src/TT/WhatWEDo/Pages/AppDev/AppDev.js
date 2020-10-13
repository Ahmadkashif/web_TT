import React , {Component} from 'react'
import G1 from '../../../../images/Pages/iOS App.png'
import AndApp from '../../../../images/Pages/Android Apps.png'
import CrossPlatform from '../../../../images/Pages/CROSS-PLATFORM.png'
import HybridApps from '../../../../images/Pages/hybrid app.png'
import Ar from '../../../../images/Pages/Augmented Reality.png'
import ReactNative from '../../../../images/Pages/react native.png'
import Connect from '../../../../images/Pages/icons_circle/preProduction.png'
import Plan from '../../../../images/Pages/icons_circle/conceptArt.png'
import Design from '../../../../images/Pages/icons_circle/assetProduction.png'
import Development from '../../../../images/Pages/icons_circle/DEVELOPING.png'
import Testing from '../../../../images/Pages/icons_circle/testing.png'
import DeliverySupport from '../../../../images/Pages/icons_circle/SUPPORT.png'
import Jumbo1 from '../../Jumbo1/Jumbo1'
import '../Pages.css'
class AppDev extends Component{
    
    componentDidMount() {
        window.scrollTo(0, 0);
      }

    render(){
        return (
            <div className = "">
                <Jumbo1 title = {"App Development"}/>
            <div className = "jumbotron WhatweDoDark">
            
            <p className = "container topText text-center">We have what it takes to build efficient mobile apps for every platform and deliver high quality services to meet global standards. We have developed and deployed mobile application development solutions and services for many business apps for our clients.
</p>
            <div className = "row">
                <div className = "col-xl-4 col-lg-4 col-md-12 col-sm-12 w-100 AppDevPageMainImage">

                </div>
                <div className = "col-xl-8 col-lg-8 col-md-12 col-sm-12 ContentColumn">
                        <div className = "row container">
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                                <div className = "pageCard d-flex flex-column justify-content-center my-auto">
                                    <div className = "row">
                                        <div className = "col-3">
                                            <img className = "pageCardImg" src = {G1}/>
                                        </div>
                                        <div className = "col-9 d-flex flex-column justify-content-center">
                                        <h1 className = " text-center  topRowHeading d-flex justify-content-center">
                                            <strong>iOS App</strong>
                                        </h1>
                                        <p className = " text-center pageCardPara">We specialize in iOS application development which attracts maximum number of iOS users.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                            <div className = "pageCard d-flex flex-column justify-content-center my-auto">
                                    <div className = "row">
                                        <div className = "col-3">
                                            <img className = "pageCardImg" src = {AndApp}/>
                                        </div>
                                        <div className = "col-9 d-flex flex-column justify-content-center">
                                        <h1 className = " text-center  topRowHeading d-flex justify-content-center">
                                            <strong>Android Apps</strong>
                                        </h1>
                                        <p className = "text-center pageCardPara">Our Android applications provide you a competitive advantage in respective industry</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "row  container">
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                            <div className = "pageCard d-flex flex-column justify-content-center my-auto">
                                    <div className = "row">
                                        <div className = "col-3">
                                            <img className = "pageCardImg" src = {CrossPlatform}/>
                                        </div>
                                        <div className = "col-9 d-flex flex-column justify-content-center">
                                        <h1 className = " text-center  topRowHeading d-flex justify-content-center">
                                            <strong>Cross Platform</strong>
                                        </h1>
                                        <p className = "text-center pageCardPara">Our application attracts and retains maximum number of users around the world</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                                 <div className = "pageCard d-flex flex-column justify-content-center my-auto">
                                    <div className = "row">
                                        <div className = "col-3">
                                            <img className = "pageCardImg" src = {HybridApps}/>
                                        </div>
                                        <div className = "col-9 d-flex flex-column justify-content-center">
                                        <h1 className = "text-center   topRowHeading d-flex justify-content-center">
                                            <strong>Hybrid Application</strong>
                                        </h1>
                                        <p className = "text-center pageCardPara">Hybrid app development solutions are robust, high-performing, and to handle any business and IT needs.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "row  container">
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                            <div className = "pageCard d-flex flex-column justify-content-center my-auto">
                                    <div className = "row">
                                        <div className = "col-3">
                                            <img className = "pageCardImg" src = {Ar}/>
                                        </div>
                                        <div className = "col-9 d-flex flex-column justify-content-center">
                                        <h1 className = "text-center   topRowHeading d-flex justify-content-center">
                                            <strong>Augmented Reality</strong>
                                        </h1>
                                        <p className = "text-center pageCardPara">Our AR application developers lay pieces of real world in virtual world.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                                 <div className = "pageCard d-flex flex-column justify-content-center my-auto">
                                    <div className = "row">
                                        <div className = "col-3">
                                            <img className = "pageCardImg" src = {ReactNative}/>
                                        </div>
                                        <div className = "col-9 d-flex flex-column justify-content-center">
                                        <h1 className = "text-center   topRowHeading d-flex justify-content-center">
                                            <strong>React Native Apps</strong>
                                        </h1>
                                        <p className = "text-center pageCardPara">We develop React Native Mobile Apps with smooth and strong performance.</p>
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
        <div className = "mt-5 container">
                    <h2 className = "d-flex justify-content-center OurProcess" text-align= "center">Our Process</h2>
                    <div className = "row mb-4 ">
                        <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className = " absSupport">
                                <div className="card  WhyUsCard text-center">
                                    <div className="card-body d-flex flex-column justify-content-center my-auto mx-auto">
                                        <div className = "my-auto">
                                        <img src = {Connect} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-2">Connect</h5>
                                        <p className="card-text">A series of meet ups to define the product goals.</p>
                                        </div>
                                    
                                    </div>
                                </div>        
                            </div>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className = " absSupport">
                                <div className="card WhyUsCard text-center">
                                    <div className="card-body d-flex flex-column justify-content-center">
                                    <img src = {Plan} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-2"> Plan</h5>
                                        <p className="card-text">We formulate winning strategy, and support it with great design and world class development.</p>
                                    </div>
                                </div>        
                            </div>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className = " absSupport">
                                <div className="card WhyUsCard text-center">
                                    <div className="card-body d-flex flex-column justify-content-center">
                                    <img src = {Design} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-2">Design</h5>
                                        <p className="card-text">We first focus on UX, and then build UI. Finally, we polish it to make product sticky.
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
                                    <img src = {Development} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-2"> Development</h5>
                                        <p className="card-text">We practice Agile Development methodology. Each day we build to better evolve the requirements and end solution.</p>
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
                                        <p className="card-text">We do extensive testing, to make sure its a great! solution, before we release it.</p>
                                    </div>
                                </div>        
                            </div>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-4">
                            <div className = " absSupport">
                                <div className="card WhyUsCard text-center">
                                    <div className="card-body d-flex flex-column justify-content-center">
                                    <img src = {DeliverySupport} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-2">
Delivery & Support
</h5>
                                        <p className="card-text">We distribute it, and remain available to troubleshoot issues, improve user experience

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
export default AppDev;