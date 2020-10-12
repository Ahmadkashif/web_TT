import React , {Component } from 'react'
import './Jumbo1.css'
class Jumbo1 extends Component{
    render(){
        return(
            <div className = "WWEDOJM1_main header">
                <div className="jumbotron jumbotron-fluid mb-0 d-felx flex-column blackOverlay col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 w-100 pt-0 pb-0">
                    <div className = "d-flex flex-column justify-content-center my-auto">
                        <div className="d-flex flex-column  WWEdoMainHeading col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h1 className="d-flex flex-column mt-5 pt-5 display-4 mx-auto mb-0 text-center"><strong>{this.props.title}</strong></h1>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}
export default Jumbo1;