import React , {Component} from 'react'
import './ContactUs.css'
import JumboCnt from './jumboCntUS/jumboCnt'
import CU_form from './CU_form/CU_form'
import Cu_modal from './CU_modal/Cu_modal'
import Cu_modal2 from './CU_modal/CU_modal2'
import Cu_map from './Cu_map/Cu_map'
import Social from './SocialMedia/social'
class ContactUsPage extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
        
    }
    onpopstate = ()=>{
        window.scrollTo(0, 0);
    }
      componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) { 
         document.body.animate({scrollTop:0},'slow');
        }
        window.scrollTo(0, 0);
        }

    render(){
        return(
            <div className = "CU">
                <JumboCnt/>
                <div className = "container-fluid mb-5">
                    <h1 className= " mb-5 d-flex justify-content-center ContactUsHeading text-center"> 
                    Now Is The Time To Craft Brilliance Together
                    </h1>
                    <div className = "d-flex justify-content-center text-center">
                    <p className = "ContactUspara">Let’s have a heart to heart talk.<br/> Now is the time to get in touch and let us turn your game idea into an exceptional masterpiece</p>
                    </div>
                    
                </div>
                {/* <div className = "row m-0 p-0 w-100">
                    <div className = "col-xl-2 col-lg-2 col-md-0 col-sm-0 w-100"></div>
                    <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 w-100 CuModalBody  d-flex justify-content-center">
                        <Cu_modal/>
                    </div>
                    <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 w-100 p-0 m-0 d-flex justify-content-center">
                        <CU_form/>
                    </div>
                    <div className = "col-xl-2 col-lg-2 col-md-0 col-sm-0 w-100"></div>
                </div> */}
                <div className = "">
                    <div className = "row w-100 m-0 p-0">
                        <div className = "col-xl-3 col-lg-3 col-md-1 col-sm-1 w-100"></div>
                        <div className = "col-xl-6 col-lg-8 col-md-10 col-sm-10 w-100 d-flex flex-column">
                        <Cu_modal2/>
                            <div className = "mt-5">
                                <h3 className = "mt-5 mb-3 d-flex justify-content-center">
                                    Reach Out To Us
                                </h3>
                                <CU_form/>
                                <div className = "d-flex justify-content-center mt-2 mb-4">
                                    <Social/>
                                </div>
                            </div>
                        </div>
                        <div className = "col-xl-3 col-lg-3 col-md-1 col-sm-1 w-100"></div>
                    </div>
                </div>
                <div className = "row w-100 m-0 p-0">
                    <div className = "col-xl-3 col-lg-3 col-md-1 col-sm-1 w-100"></div>
                    <div className = "col-xl-6 col-lg-6 col-md-10 col-sm-10 w-100 mb-4">
                        <Cu_map/>
                    </div>
                    <div className = "col-xl-3 col-lg-3 col-md-1 col-sm-1 w-100"></div>
                </div>
            </div>
        )
    }
}
export default ContactUsPage