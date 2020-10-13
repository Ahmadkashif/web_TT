import React ,{ Component} from 'react'
import Jumbo1 from './jumbo1_homepage/jumbo1'
import OverView from './OverView/overview'
import WhatWEdo from './WhatWedo/CompWhatWedo'
import OurWork from './OurWork/OurWork'
import WhyUs from './WhyUs/Whyus'
import GetinTouch from '../WhatWEDo/getInTouch/getInTouch'
class HomePage extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render(){
        return (
        <div className = "HomePageImage">
        <Jumbo1/>
                 
        <WhyUs/>
        <WhatWEdo/>
        <OurWork/>
        <GetinTouch/>
        </div>
        )
    }
}
export default HomePage;