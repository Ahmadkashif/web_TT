import React ,{Component} from 'react'
import './jumbo.css'
class Jumbo1 extends Component{
    render(){
        return (
            <div className = "jumbo1AboutUs">
                <div className="jumbotron jumbotron-fluid blackOverlay">
                    <div className="container d-flex justify-content-center">
                        <h1 className="display-4 heading_abtus">About Us</h1>
                    </div>
                </div>
            </div>
        )
    }
}
export default Jumbo1