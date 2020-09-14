import React, { Component } from 'react';
import TT_icon from '../../images/logo.png';
import NavbarLinks from './navbarLinks/navbarLinks'
class navbar extends Component{
    render(){
        return(
            <div>
                 <nav className="navbar navbar-expand-lg bg-light shadow p-3 mb-5 bg-white rounded navbar_theme w-100 fixed-top shadownavCust">
                     <div className = "row w-100">
                         <div className = "col-xl-2 col-lg-2 col-md-2 col d-flex justify-content-end">
                         <a className="navbar-brands" href="#">
							 <img src = {TT_icon} className = "ui top aligned tiny image"/>
						 </a>
                         </div>
						 <div className = "col-xl-4 col-lg-4 col-md-7 col">
							 <div></div>
						 </div>
                         <div className = "col-xl-6 col-lg-6 col-md-3 col">
                        	 <NavbarLinks/>	
						</div>
                     </div>
            </nav>
            </div>
        )
    }
}
export default navbar;