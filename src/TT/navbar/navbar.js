import React, { Component } from 'react';
import TT_icon from '../../images/images/logo_icon.svg';
import TT_icon1 from '../../images/images/text.svg';
import {NavLink} from 'react-router-dom'
import './navbarLinks/navbarLinks.css'
import {SVGRectElement} from 'react'
import NavbarLinks from './navbarLinks/navbarLinks'
class navbar extends Component{
    render(){
        return(
            <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top navCustDesign shadownavCust">
                <div className = "container">
                <a class="navbar-brand ml-5 d-flex" href="/">
                    <img src = {TT_icon} className = "TTicon"/><img src = {TT_icon1} className = "TTicon1"/>
                </a>
                <button class="navbar-toggler nvToggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon nvToggler"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto mr-5 rightPaddingNavbar">
                    <li class="nav-item NavItem active"data-toggle="collapse" data-target=".navbar-collapse.show">
                    <NavLink className="nav-link text-white navCustDesign_spacingX" to="/" exact activeClassName = "Nav_link_active_cust" ><strong>Home </strong><span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li class="nav-item NavItem "data-toggle="collapse" data-target=".navbar-collapse.show">
                    <NavLink className="nav-link NavItem_b navCustDesign_spacingX" to="/whatwedo/all" exact activeClassName = "Nav_link_active_cust"><strong>What we do </strong></NavLink>
                    </li>
                    <li class="nav-item NavItem" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <NavLink className="nav-link navCustDesign_spacingX" to="/portfolio/AppGame" activeClassName = "Nav_link_active_cust"><strong>Portfolio</strong></NavLink>
                    </li>
                    <li className="nav-item NavItem" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <NavLink className="nav-link navCustDesign_spacingX" to="/aboutus" exact activeClassName = "Nav_link_active_cust"><strong>About us</strong></NavLink>
                    </li>
                    <li className="nav-item NavItem" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <NavLink className="nav-link navCustDesign_spacingX contactLink" to="/contactus" exact activeClassName = ""><strong>Get in touch</strong></NavLink>
                    </li>
                    </ul>
                </div>
                </div>
                
            </nav>
            </div>
        )
    }
}
export default navbar;
