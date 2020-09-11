import React , {Component} from 'react'
import JumboCnt from './jumboCntUS/jumboCnt'
import CU_form from './CU_form/CU_form'
class ContactUsPage extends Component{
    render(){
        return(
            <div>
                <JumboCnt/>
                <div className = "container">
                    <h1 className= "display-3 mb-5 d-flex justify-content-center"> 
                    Let us know what you think ...
                    </h1>
                </div>
                <div className = "row CU_form_length ">
                    <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-12 CU_form">
                        <CU_form/>
                    </div>
                    <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-0 contactMale">
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactUsPage