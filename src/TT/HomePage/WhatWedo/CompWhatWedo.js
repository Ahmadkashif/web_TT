import React ,{Component} from 'react'
import Card from './Cards/Cards'
import './CompWWEdo.css'
import GamingIcon from '../../../images/icons/gaming 2.png'
import AppDevIcon from '../../../images/icons/app development.png'
import WebDevIcon from '../../../images/icons/web developer.png'
import UIUXIcon from '../../../images/icons/ui ux.png'
import DigiIcon from '../../../images/icons/difital marketing.png'

class WWedo extends Component{

    state= {
        cardNames : ["Computer Games",
                "Mobile Apps",
                "Web Development",
                "UI/UX Design",
                "Digital Marketing"
                ],
        cardTexts :["Building games from scratch to finish. We craft futuristic games that can transform your game idea into reality."
    ,"We deliver next-generation iPhone & Android applications to meet the most demanding customer requirements"
    ,"Our web services assure you to lift your business growth. We brand your digital occurrence user-friendly and consistent."
    ,"Build the product you need.  Our UI/UX developers profusely interact with various interfaces to better develop apt UI/UX design."
    ,"Our methodology brings you a fusion of contemporary business basics with all new aroma of modern-day media technology."]
    };

    render(){
        return(
            <div className= "">
                <div className="jumbotron vertSpacing col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-0 mb-0" id = "WWeDoJumbo">
                    <h1 className = "display-4 d-flex justify-content-center WWEDOHeading revealer ">What We Do</h1>
                    <p className = "d-flex justify-content-center WWEDOpara mt-3 mb-3">A legacy of being the best in business.</p>
                    <div className = "container">
                        
                    <div className = "row d-flex justify-content-center">
                    <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center">
                       <Card icon = {GamingIcon} label = {this.state.cardNames[0]} info = {this.state.cardTexts[0]}/>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center">
                        <Card icon = {AppDevIcon} label = {this.state.cardNames[1]} info = {this.state.cardTexts[1]}/>
                        </div>
                        
                    </div>
                    <div className = "row d-flex justify-content-center">
                        <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12 justify-content-center">
                        <Card icon = {WebDevIcon} label = {this.state.cardNames[2]} info = {this.state.cardTexts[2]}/>
                        </div>
                    <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12 justify-content-center">
                       <Card icon = {UIUXIcon} label = {this.state.cardNames[3]} info = {this.state.cardTexts[3]}/>
                        </div>  
                        <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12 justify-content-center">
                        <Card icon = {DigiIcon} label = {this.state.cardNames[4]} info = {this.state.cardTexts[4]}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    };
}
export default WWedo;