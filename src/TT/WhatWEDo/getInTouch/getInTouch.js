import React , {Component} from 'react'
import './getInTouch.css'
class InTouch extends Component{
    render(){
        return(
            <div className = "jumbotron intouchBody mb-0">
                <div className = "container">
                    <div className = "row ">
                        <div className = "col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
                            <h1 className = "mb-3 intouchheader">Lets get in touch ... !</h1>
                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center pt-1">
                        <a  className = " btn btn-danger sendUsmsg" href = "/contactus">Send Us A Message</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default InTouch;