import React ,{ Component} from 'react'
import Jumbo1 from './jumbo1_homepage/jumbo1'
import OverView from './OverView/overview'
import WhatWEdo from './WhatWedo/whatWedo'
import OurWork from './OurWork/OurWork'
class HomePage extends Component{

    render(){
        return (
        <div>
            <Jumbo1/>
            <OverView/>
            <WhatWEdo/>
            <div className= "jumbotron mainPage_vert_space">
           <OurWork/>
            </div>
        </div>
        )
    }
}
export default HomePage;