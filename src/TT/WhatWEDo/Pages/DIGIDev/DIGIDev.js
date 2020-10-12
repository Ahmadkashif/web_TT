import React ,{Component} from 'react'
import G1 from '../../../../images/Pages/GameDev/Gamedev1.png'
import Aso from '../../../../images/Pages/IconsWebUiDigi/ASO.png'
import Payper from '../../../../images/Pages/IconsWebUiDigi/Pay per Click.png'
import SEO from '../../../../images/Pages/IconsWebUiDigi/Search Engine Optimization.png'
import SMM from '../../../../images/Pages/IconsWebUiDigi/Social Media Marketing.png'
import EmailMarketing from '../../../../images/Pages/IconsWebUiDigi/Email Marketing.png'
import ReputationManagement from '../../../../images/Pages/IconsWebUiDigi/Reputation Management.png'

import Jumbo1 from '../../Jumbo1/Jumbo1'
import '../Pages.css'
class DIGIDev extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render(){
        return(
            <div>
                <Jumbo1 title = {"Digital Marketing"}/>
            
            <div className = "jumbotron">
            
            <p className = "container">Your digital marketing strategy will likely comprise various digital marketing channels. Because your business is unique, you won't market yourself like anyone else and that's why we don't offer a 'one-size-fits-all' solution. Instead, we offer a wide range of digital marketing services, enabling you to select the ones that are right for you or to enlist the help of our team in crafting a solution which best suits your needs and goals</p>
            <div className = "row">
                <div className = "col-xl-4 col-lg-4 col-md-12 col-sm-12 w-100 uiuxDevPageMainImage">

                </div>
                <div className = "col-xl-8 col-lg-8 col-md-12 col-sm-12 ContentColumn">
                        <div className = "row container">
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                                <div className = "pageCard">
                                    <div className = "row">
                                        <div className = "col-xl-3 col-lg-3 col-sm-3 col-md-3">
                                            <img className = "pageCardImg" src = {Aso}/>
                                        </div>
                                        <div className = "col-xl-9 col-lg-9 col-sm-9 col-md-9 d-flex flex-column justify-content-center">
                                        <h1 className = "   topRowHeading d-flex justify-content-center">
                                            <strong>ASO</strong>
                                        </h1>
                                        <p className = "pageCardPara">We make sure that your app matures to the uppermost rank in the top App stores by different tactics and progressive digital apparatuses</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                            <div className = "pageCard">
                                    <div className = "row">
                                        <div className = "col-xl-3 col-lg-3 col-sm-3 col-md-3">
                                            <img className = "pageCardImg" src = {Payper}/>
                                        </div>
                                        <div className = "col-xl-9 col-lg-9 col-sm-9 col-md-9 d-flex flex-column justify-content-center">
                                        <h1 className = "   topRowHeading d-flex justify-content-center">
                                            <strong>Pay per Click</strong>
                                        </h1>
                                        <p className = "pageCardPara">Our PPC professionals specialize in social promotion to search ads, and have mastered all, in paid media</p>
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
                                            <img className = "pageCardImg" src = {SEO}/>
                                        </div>
                                        <div className = "col-xl-9 col-lg-9 col-sm-9 col-md-9 d-flex flex-column justify-content-center">
                                        <h1 className = "   topRowHeading d-flex justify-content-center">
                                            <strong>Search Engine Optimization</strong>
                                        </h1>
                                        <p className = "pageCardPara">We guarantee your top ranking through proficient keywords and finest SEO practices</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                                 <div className = "pageCard">
                                    <div className = "row">
                                        <div className = "col-xl-3 col-lg-3 col-sm-3 col-md-3">
                                            <img className = "pageCardImg" src = {SMM}/>
                                        </div>
                                        <div className = "col-xl-9 col-lg-9 col-sm-9 col-md-9 d-flex flex-column justify-content-center">
                                        <h1 className = "   topRowHeading d-flex justify-content-center">
                                            <strong>Social Media Marketing</strong>
                                        </h1>
                                        <p className = "pageCardPara">Our competent social media marketing team materialize your brand recognition and produce splendid results</p>
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
                                            <img className = "pageCardImg" src = {EmailMarketing}/>
                                        </div>
                                        <div className = "col-xl-9 col-lg-9 col-sm-9 col-md-9 d-flex flex-column justify-content-center">
                                        <h1 className = "   topRowHeading d-flex justify-content-center">
                                            <strong>Email Marketing</strong>
                                        </h1>
                                        <p className = "pageCardPara">Our erudite E-mails sustain your sales and profits by establishing pleasant connections with your future and currents clients</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pl-0 pr-0">
                                 <div className = "pageCard">
                                    <div className = "row">
                                        <div className = "col-xl-3 col-lg-3 col-sm-3 col-md-3">
                                            <img className = "pageCardImg" src = {ReputationManagement}/>
                                        </div>
                                        <div className = "col-xl-9 col-lg-9 col-sm-9 col-md-9 d-flex flex-column justify-content-center">
                                        <h1 className = "   topRowHeading d-flex justify-content-center">
                                            <strong>Reputation Management</strong>
                                        </h1>
                                        <p className = "pageCardPara">At Twelve Tiers Technologies we make sure to that you stay sustainably well reputed</p>
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
export default DIGIDev;