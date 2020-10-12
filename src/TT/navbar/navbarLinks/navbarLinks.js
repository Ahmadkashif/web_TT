import React,{Component} from "react"
import {NavLink} from 'react-router-dom'
import '../navbarLinks/navbarLinks.css'
class NavbarLinks extends Component{
    render(){
        return (
            <div className = "">
                   <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto mr-5">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    </ul>
                </div>
            </div>
        )
    };
}
export default NavbarLinks;
// 
//     <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
// </button>
// <div className="collapse navbar-collapse ml-auto" id="navbarNavDropdown">
//     <ul className="navbar-nav">
//     <li className="nav-item active d-flex justify-content-center">
//         <NavLink className="nav-link navCustDesign_spacingX" to="/" exact activeClassName = "Nav_link_active_cust">Home <span className="sr-only">(current)</span></NavLink>
//     </li>
//     <li className="nav-item">
//     <NavLink className="nav-link navCustDesign_spacingX" to="/whatwedo" exact activeClassName = "Nav_link_active_cust">What we do</NavLink>
//     </li>
//     <li className="nav-item">
//         <NavLink className="nav-link navCustDesign_spacingX" to="/portfolio" activeClassName = "Nav_link_active_cust">Portfolio</NavLink>
//     </li>
//     <li className="nav-item">
//         <NavLink className="nav-link navCustDesign_spacingX" to="/aboutus" exact activeClassName = "Nav_link_active_cust">About us</NavLink>
//     </li>
//     <li className="nav-item">
//     <NavLink className="nav-link navCustDesign_spacingX" to="/contactus" exact activeClassName = "Nav_link_active_cust">Contact</NavLink>
//     </li>
    
//     </ul>
// </div>
