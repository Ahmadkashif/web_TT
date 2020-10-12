import React,{Component} from 'react'
import './footer.css'
class Footer extends Component{
    render(){
        return(
        <div className = "mt-0">
            <div className="jumbotron jumbotron-fluid footerCust bg-dark  mb-0 pr-0 mr-0 w-100">
                <div className = "row w-100">
                <div className="col-6">
                <h3 className = "pl-3 footerMain my-auto">Twelve Tiers Technologies PVT LTD<br/><span className = "allRights">All rights reserved</span></h3>
                </div>
                <div className = "col-3">
                    <div className = "row w-100 d-flex">
                        <div className = "col-xl-9 col-lg-9 col-md-9 col-sm-9 w-80 d-flex flex-column">
                            <div className = "footer_Text text-wrap d-flex flex-column justify-content-start">
                            <h3 className = "footerSub">Explore</h3>
                            <div className = "d-flex flex-column">
                                <div> <a href = "#" className = "links">Home</a></div>
                                <div> <a href = "#" className = "links">Portfolio</a></div>
                                <div><a href = "#" className = "links">About us</a></div>
                                <div><a href = "#" className = "links">Contact </a></div>
                            </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "col-3">
                    <div className = "">
                        <h3 className = "footerSub">Legal</h3>
                            <a href= "/privacyPolicy">
                            <p className = "footer_Text text-end">Privacy Policy</p>
                            </a>
                    </div>
                </div>
                </div>
            </div>
          
        </div>)
    };
}
export default Footer;