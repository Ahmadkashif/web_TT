import React , {Component} from 'react' 
import './body.css'
import Steves from '../../../images/steve.jpg'
class Body extends Component{
    render(){
        return(
            <div>
                <div className = "container">

                    <div className = "row">
                        <h1 className = "display-3">
                            Key Members
                        </h1>

                    </div>
                    <div className = "row ABT_vrtSpc">
                        <div className = "col ">
                            <div className="ui card cardABT">
                            <a className="image" href="#">
                                <img src={Steves} className = "cardImg"/>
                            </a>
                            <div>
                                <p className = ""> Steve Jobs</p>
                                <p className = "subtitle">CEO</p>
                            </div>
                            </div>
                        </div>
                        <div className = "col ">
                        <div className="ui card cardABT">
                            <a className="image" href="#">
                                <img src={Steves} className = "cardImg"/>
                            </a>
                            <div>
                                <p className = ""> Steve Jobs</p>
                                <p className = "subtitle">CEO</p>
                            </div>
                            </div>
                        </div>
                        <div className = "col ">
                        <div className="ui card cardABT">
                            <a className="image" href="#">
                                <img src={Steves} className = "cardImg"/>
                            </a>
                            <div>
                                <p className = ""> Steve Jobs</p>
                                <p className = "subtitle">CEO</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className = "row"></div>
                    <div className = "row"></div>
                </div>

                <div className = "container cotainerCustomers ABT_vrtSpc ">
                        <h1>
                            Our Happy Customers
                        </h1>
                </div>
            </div>
        )
    }
}
export default Body