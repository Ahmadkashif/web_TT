import React , {Component} from 'react'
import OverView    from '../OverView/overview'
import AbsSupport from '../../../images/whyUs/absolute support.png'
import Bestinclass from '../../../images/whyUs/best in calss design.png'
import CostEffective from '../../../images/whyUs/cost effective.png'
import DediDev from '../../../images/whyUs/dedicated work.png'
import Expstaff from '../../../images/whyUs/experienced.png'
import Hquality from '../../../images/whyUs/hd.png'
import KeepUp from '../../../images/whyUs/app development.png'
import MultiG from '../../../images/whyUs/gaming.png'

import './WhyUs.css'
class WhyUs extends Component{
    render(){
        return(
          
                
            <div className = "jumbotron mb-0 mt-0 jmboWhyus">
                
                <div className = "container mt-0 mb-0">
                    <div >
                    <OverView/>   
                    </div>
                

                    <h1 className = "display-4 d-flex justify-content-center mt-5 mb-5"><strong>Why Choose Us</strong></h1>
                    <p className = "display-4 d-flex justify-content-center Capable">
                        <strong>We’re efficiently effective!</strong>
                    </p>
                    <p className = "display-4 d-flex justify-content-center CapablePara mb-5">
                    Twelve Tiers Technologies is one of the most experienced mobile apps & 
                    games development company, loaded with the highly talented developers in 
                    the industry. The diversity of the projects they have worked on, has enhanced 
                    their experience to a degree where they are able to materialize even the most 
                    complex requirements of the project.
                    </p>
                    <div className = "row mb-4 ">
                        <div className = "col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-4">
                            <div className = " absSupport ">
                                <div className="card WhyUsCard text-center d-flex flex-column justify-content-center">
                                    <div className="card-body d-flex flex-column">
                                        <div className = "d-flex flex-column justify-content-center my-auto ">
                                        <img src = {AbsSupport} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-3">ABSOLUTE SUPPORT</h5>
                                        <p className="card-text">Twelve Tiers Technologies offers complete, as well as, custom 
                                        development services in apps & games, with additional support for technical issues.</p>
                                        </div>
                                        
                                    </div>
                                </div>        
                            </div>
                        </div>
                        <div className = "col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-4">
                            <div className = " absSupport">
                                <div className="card WhyUsCard text-center">
                                    <div className="card-body d-flex flex-column">
                                    <div className = "d-flex flex-column justify-content-center align-middle my-auto">
                                    <img src = {CostEffective} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-3">COST-EFFECTIVE SERVICE</h5>
                                        <p className="card-text">We keep our stack of technologies full of latest tools to make
                                         the whole process of development more cost-effective for you.</p>
                                    </div>
                                    </div>
                                </div>        
                            </div>
                        </div>
                        <div className = "col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-4">
                            <div className = " absSupport">
                                <div className="card WhyUsCard text-center">
                                    <div className="card-body d-flex flex-column">
                                    <div className = "d-flex flex-column justify-content-center align-middle my-auto ">
                                    <img src = {MultiG} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-3">MULTIPLE GENRES</h5>
                                        <p className="card-text">Twelve Tiers Technologies is at the forefront of games development,
                                         having developed some of the top-ranking games in varied genres.</p>
                                    </div>
                                    </div>
                                </div>        
                            </div>
                        </div>
                        <div className = "col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-4">
                            <div className = " absSupport">
                                <div className="card WhyUsCard text-center">
                                    <div className="card-body d-flex flex-column">
                                    <div className = "d-flex flex-column justify-content-center align-middle my-auto">
                                    <img src = {Expstaff} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-3"> EXPERIENCED STAFF</h5>
                                        <p className="card-text">Ours is an experienced team of apps & game specialists who 
                                        provide you with limitless support in all the game development phases.</p>
                                    </div>
                                    </div>
                                </div>        
                            </div>
                        </div>
                    </div>


                    <div className = "row">
                        <div className = "col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-4">
                            <div className = " absSupport">
                                <div className="card WhyUsCard text-center">
                                    <div className="card-body d-flex flex-column">
                                    <div className = "d-flex flex-column justify-content-center align-middle my-auto">
                                    <img src = {Bestinclass} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-3">BEST-IN-CLASS DESIGN</h5>
                                        <p className="card-text">With an ideal blend of technical expertise and creative
                                         intelligence, Twelve Tiers Technologies team creates world-class graphical solutions</p>
                                    </div>
                                    </div>
                                </div>        
                            </div>
                        </div>
                        <div className = "col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-4">
                            <div className = " absSupport">
                                <div className="card WhyUsCard text-center">
                                    <div className="card-body d-flex flex-column">
                                    <div className = "d-flex flex-column justify-content-center align-middle my-auto">
                                    <img src = {DediDev} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-3">DEDICATED DEVELOPERS</h5>
                                        <p className="card-text">We are a dedicated apps & games development service provider
                                         with an enviable pool of expert developers in multiple technologies.</p>
                                    </div>
                                    </div>
                                </div>        
                            </div>
                        </div>
                        <div className = "col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-4">
                            <div className = " absSupport">
                                <div className="card WhyUsCard text-center">
                                    <div className="card-body d-flex flex-column">
                                    <div className = "d-flex flex-column justify-content-center align-middle my-auto">
                                    <img src = {Hquality} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-3">HIGH-QUALITY WORK</h5>
                                        <p className="card-text">Our experienced graphic designers are adept at creating 
                                        high-quality visuals for 2D and 3D apps & games with utmost efficiency.</p>
                                    </div>
                                    </div>
                                </div>        
                            </div>
                        </div>
                        <div className = "col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-4">
                            <div className = " absSupport">
                                <div className="card WhyUsCard text-center">
                                    <div className="card-body d-flex flex-column">
                                    <div className = "d-flex flex-column justify-content-center align-middle my-auto">
                                    <img src = {KeepUp} className = "WhyUsIcon mx-auto"/>
                                        <h5 className="card-title mt-3">KEEP UP WITH THE CONTEMPO</h5>
                                        <p className="card-text">We keep ourselves updated with latest changes in
                                         technology and trends in the market to keep our clients ahead of the curve.</p>
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
export default WhyUs;