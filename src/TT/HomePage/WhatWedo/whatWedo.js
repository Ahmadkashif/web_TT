import React ,{Component} from 'react'
import Card from './Cards/Cards'
import './WWEdo.css'
import GamingIcon from '../../images/icons/gaming.png'
import AppDevIcon from '../../images/icons/appdev.png'
import WebDevIcon from '../../images/icons/webdev.png'
import UIUXIcon from '../../images/icons/uiux.png'
import DigiIcon from '../../images/icons/digitalmarketing.png'

class WWedo extends Component{

    state= {
        cardNames : ["Computer Games",
                "Mobile Apps",
                "Web Development",
                "UI/UX Design",
                "Digital Marketing"
                ]
    };

    render(){
        return(
            <div>
                <div className="jumbotron jumbotron-fluid vertSpacing col-xl-12 col-lg-12 col-md-12 col-sm-12" id = "WWeDoJumbo">
                    <h1 className = "display-4">What We Do</h1>
                    <div className = "container">

                    
                    <div className = "row vertSpacing d-flex justify-content-around">
                        <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12">
                       <Card icon = {GamingIcon} label = {this.state.cardNames[0]}/>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <Card icon = {AppDevIcon} label = {this.state.cardNames[1]}/>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <Card icon = {WebDevIcon} label = {this.state.cardNames[2]}/>
                        </div>
                    </div>

                    <div className = "row d-flex justify-content-around  ">
                    <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12">
                       <Card icon = {UIUXIcon} label = {this.state.cardNames[3]}/>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <Card icon = {DigiIcon} label = {this.state.cardNames[4]}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    };
}
export default WWedo;