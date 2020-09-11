import React,{Component} from 'react'
import './footer.css'
class Footer extends Component{
    render(){
        return(
        <div>
            <div className="jumbotron jumbotron-fluid footerCust  mb-0">
                <div className="container">
                    <div className = "row">
                    <div className = "col">
                    <i className="facebook f icon iconfb w-10 h-10"></i>
                    </div>
                    <div className = "col">
                        <div className = "footer_right">
                        <p>Twelve Tiers Technologies Private Limited | All rights reserved</p>
                        </div>
                    </div>
                    <div className = "col">
                        </div>
                    </div>
                </div>
            </div>
          
        </div>)
    };
}
export default Footer;