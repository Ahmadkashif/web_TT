import React,{Component} from "react"
import {NavLink} from 'react-router-dom'
import '../navbarLinks/navbarLinks.css'
class NavbarLinks extends Component{
    render(){
        return (
            <div className = "navCustDesign d-flex justify-content-center">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link navCustDesign_spacingX" to="/" exact activeClassName = "Nav_link_active_cust">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navCustDesign_spacingX" to="#" activeClassName = "Nav_link_active_cust">Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navCustDesign_spacingX" to="/aboutus" exact activeClassName = "Nav_link_active_cust">About us</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link navCustDesign_spacingX" to="/contactus" exact activeClassName = "Nav_link_active_cust">Contact</NavLink>
                        </li>
                        </ul>
                    </div>
            </div>
        )
    };
}
export default NavbarLinks;