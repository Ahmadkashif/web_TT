import React ,{Component} from 'react'
import './Platforms.css'
class Platforms extends Component{
    render(){
        return(
            <div className = "jumbotron platform WWeDoVrtSpace">
                <div className = "container">
                <div className = "row ">
                    <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <p className = "display-4 platformPara">
                            <strong>Platforms</strong> we Build for</p>
                    </div>

                    <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                    <i className="apple icon platformIcons"></i>
                    <i class="windows icon platformIcons"></i>
                    <i class="android icon platformIcons"></i>
                    <i class="xbox icon platformIcons"></i>
                    <i class="playstation icon platformIcons"></i>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Platforms;