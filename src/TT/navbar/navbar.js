import React, { Component } from 'react';
import TT_icon from '../../images/logo.png';
class navbar extends Component{
    render(){
        return(
            <div>
                 <nav className="navbar navbar-expand-lg bg-light navbar_theme w-100 fixed-top">
                 <div className= "container">
                     <div className = "row w-100">
                         <div className = "col-xl-2 col-lg-2 col-md-2 col-sm-1">
                         <a className="navbar-brands" href="#">
							 <img src = {TT_icon} className = "ui top aligned tiny image"/>
						 </a>
                         </div>
						 <div className = "col-xl-6 col-lg-6 col-md-8 col-sm-1">
							 <div></div>
						 </div>
                         <div className = "col-xl-4 col-lg-4 col-md-2 col-sm-1 navLinks">
                        	 	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon"></span>
								</button>
								<div className="collapse navbar-collapse" id="navbarNavDropdown">
									<ul className="navbar-nav">
									<li className="nav-item active">
										<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">Portfolio</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">About Us</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">Contact</a>
									</li>
									
									</ul>
								</div>
						</div>
                     </div>
            </div>
            </nav>
            </div>
        )
    }
}
export default navbar;