import React , {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {Route, Router,Switch} from 'react-router-dom'
import './NavComp.css'
class NavComp extends Component{
    render(){
        return (
        <div className = "container mt-5">
            <div className = "NavComptab">
                <div className = "container d-flex justify-content-start">
                    <div className = "NavCompTab_selection">
                    <ul className="nav custPills">
                        <li className="nav-item">
                            <NavLink className="nav-link active NavComp_unactive" exact to="/portfolio/AppGame" activeClassName = "NavComp_active">Games {"&"} Apps</NavLink>
                        </li>
                       
                        <li className="nav-item">
                            <NavLink className="nav-link active NavComp_unactive" exact to="/portfolio/Games" activeClassName = "NavComp_active">Games</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active NavComp_unactive" exact to="/portfolio/Apps" activeClassName = "NavComp_active"> Apps</NavLink>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className = "row">
                <div className = "col">
                </div>
            </div>
        </div>);
    }
}
export default NavComp;