import React , {Component} from 'react'
import G1 from '../../../../images/Pages/e commrce.png'
import B2B from '../../../../images/Pages/B2B & B2C Portals.png'
import SPA from '../../../../images/Pages/Single Page Application.png'
import CustDev from '../../../../images/Pages/Custom Development.png'
import Cms from '../../../../images/Pages/cms.png'
import WebsiteDev from '../../../../images/Pages/Website Development.png'

import Jumbo1 from '../../Jumbo1/Jumbo1'
import '../../Jumbo1/Jumbo1.css'
import '../Pages.css'
import CU_form from '../../../ContactUs/CU_form/CU_form'
class WebDev extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render(){
        return(
        <div>
           <Jumbo1 title = {"Web Development"}/>

            <div className = "jumbotron mb-0 WhatweDoDark">
            
            <p className = "container">One of the most fundamental aspects of an enterprise is web application development which directly correlates to how the business is planned, executed and managed. We house a set of veteran developers who create web applications that can be deemed as competitive assets for online business processes</p>
            <div className = "row">
                <div className = "col-xl-4 col-lg-4 col-md-12 col-sm-12 w-100 webDevPageMainImage">

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
                                            <strong>Ecommerce Web Solutions</strong>
                                        </h1>
                                        <p className = " text-center pageCardPara">Our optimized digital solutions, with easy interface, will provide you an enriched approach to your customers.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                            <div className = "pageCard d-flex flex-column justify-content-center my-auto">
                                    <div className = "row">
                                        <div className = "col-3">
                                            <img className = "pageCardImg" src = {Cms}/>
                                        </div>
                                        <div className = "col-9 d-flex flex-column justify-content-center">
                                        <h1 className = " text-center  topRowHeading d-flex justify-content-center">
                                            <strong>CMS Website</strong>
                                        </h1>
                                        <p className = "text-center pageCardPara">Our customized CMS website will allow you to edit, add or modify your website, professionally. Clients can manage and regulate the content without the help of a webmaster.</p>
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
                                            <img className = "pageCardImg" src = {B2B}/>
                                        </div>
                                        <div className = "col-9 d-flex flex-column justify-content-center">
                                        <h1 className = " text-center  topRowHeading d-flex justify-content-center">
                                            <strong>B2B & B2C Portals</strong>
                                        </h1>
                                        <p className = "text-center pageCardPara">Our specialized B2B and B2C portals, expand your reach and let you caster to your customers around the globe</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                                 <div className = "pageCard d-flex flex-column justify-content-center my-auto">
                                    <div className = "row">
                                        <div className = "col-3">
                                            <img className = "pageCardImg" src = {SPA}/>
                                        </div>
                                        <div className = "col-9 d-flex flex-column justify-content-center">
                                        <h1 className = " text-center  topRowHeading d-flex justify-content-center">
                                            <strong>Single Page Application</strong>
                                        </h1>
                                        <p className = "text-center pageCardPara">We develop best single page apps with quick HTML page update, which provides the users hassle free and desktop like experience</p>
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
                                            <img className = "pageCardImg" src = {CustDev}/>
                                        </div>
                                        <div className = "col-9 d-flex flex-column justify-content-center">
                                        <h1 className = "text-center   topRowHeading d-flex justify-content-center">
                                            <strong>Custom Development</strong>
                                        </h1>
                                        <p className = "text-center pageCardPara">Our exclusive website designs and services will enhance your brand and make it stand apart</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                                 <div className = "pageCard d-flex flex-column justify-content-center my-auto">
                                    <div className = "row">
                                        <div className = "col-3">
                                            <img className = "pageCardImg" src = {WebsiteDev}/>
                                        </div>
                                        <div className = "col-9 d-flex flex-column justify-content-center">
                                        <h1 className = " text-center  topRowHeading d-flex justify-content-center">
                                            <strong>Website Development</strong>
                                        </h1>
                                        <p className = "text-center pageCardPara">We provide vigorous style design and fascinating look to your websites, providing you a superior verge.</p>
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
export default WebDev;