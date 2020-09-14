import React ,{ Component} from 'react'
import Jumbo1 from './jumbo1_homepage/jumbo1'
import OverView from './OverView/overview'
import WhatWEdo from './WhatWedo/whatWedo'
class HomePage extends Component{

    render(){
        return (
        <div>
            <Jumbo1/>
            <OverView/>
            <WhatWEdo/>
            <div className= "jumbotron mainPage_vert_space">
            <div className="container OurWorkShowing">
                <h1 className="display-4 d-flex justify-content-center">Our Work</h1>
                <p className="lead  d-flex justify-content-center">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p  className="d-flex justify-content-center">It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <div className= "d-flex justify-content-center mainPage_vert_space">
                <a className="btn btn-primary btn-lg" href="/portfolio" role="button">Learn more</a>
                </div>                
            </div>
            </div>
        </div>
        )
    }
}
export default HomePage;