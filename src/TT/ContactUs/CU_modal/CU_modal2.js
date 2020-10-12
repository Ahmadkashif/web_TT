import React , {Component} from 'react'
import Cu_modal from './Cu_modal'

class CU_modal2 extends Component{
    render(){
        return(
            <div className = "d-flex justify-content-center">
                <div className = "row w-100 h-50 Cu_form">
                    <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-4 w-100 d-flex flex-column justify-content-center">
                        <i className="phone icon mx-auto CUmainIcon"></i>
                        <h4 className = "d-flex justify-content-center mt-3 CUmainIconContent">Phone</h4>
                        <p className = "text-center CUmainIconContent">+92 (42) 38938820</p>
                    </div>
                    <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-4 w-100 d-flex flex-column justify-content-center centerDiv">
                    <i className="map marker alternate icon mx-auto CUmainIcon"></i>
                        <h4 className = "d-flex justify-content-center mt-3 CUmainIconContent">Address</h4>
                        <p className = "text-center CUmainIconContent">Office # 403, 89 Block B3 Gulberg III, Lahore, Punjab</p>
                    </div>
                    <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-4 w-100 d-flex flex-column justify-content-center">
                    <i className="envelope outline icon mx-auto CUmainIcon"></i>
                        <h4 className = "d-flex justify-content-center mt-3 CUmainIconContent">Email</h4>
                        <p className = "text-center CUmainIconContent">contact@twelvetierstechnologies.com</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default CU_modal2;
//<i class="map marker alternate icon"></i>
{/* <i className="phone icon"></i> */}