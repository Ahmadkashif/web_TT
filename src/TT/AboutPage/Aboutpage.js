import React , {Component} from 'react'
import Jumbo1 from './jumbo1/jumbo1'
import Corevals from './CoreVals/Corevals'
import Body from './AboutUsBody/Body'
import GetInTouch from '../WhatWEDo/getInTouch/getInTouch'
import './Aboutpage.css'
class AboutPage extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render(){
        return (
            <div className = "ABTpage">
                <Jumbo1/>
                <Corevals/>
                <GetInTouch/>
            </div>
        )
    }
}

export default AboutPage