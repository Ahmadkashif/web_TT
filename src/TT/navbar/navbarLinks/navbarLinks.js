import React,{Component} from "react"
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
                            <a className="nav-link navCustDesign_spacingX" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navCustDesign_spacingX" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navCustDesign_spacingX" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navCustDesign_spacingX" href="#">Contact</a>
                        </li>
                        </ul>
                    </div>
            </div>
        )
    };
}
export default NavbarLinks;