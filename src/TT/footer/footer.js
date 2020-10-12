import React,{Component} from 'react'
import './footer.css'
class Footer extends Component{
    render(){
        return(
        <div className = "mt-0">
            <div className="jumbotron jumbotron-fluid footerCust bg-dark  mb-0">
                <div className="container">
                    <div className = "row d-flex">
                    <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-6  d-flex justify-content-start">
                        <div className = "footer_Text text-wrap">
                        <p className = "">Twelve Tiers Technologies Private Limited | All rights reserved</p>
                        </div>
                    </div>
                    <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-6  d-flex justify-content-end">
                        <a href= "/privacyPolicy">
                        <p className = "footer_Text">Privacy Policy</p>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
          
        </div>)
    };
}
export default Footer;