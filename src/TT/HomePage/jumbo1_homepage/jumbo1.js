import React, {Component} from 'react'
import './jumbo1.css'
class Jumbo1 extends Component{
    render(){
        return(
             <div className="jumbotron jumbotron-fluid mb-0 d-flex flex-column "  id = "mainsplash">
                 <div className = " d-flex flex-column justify-content-center my-auto">
                 <div className="container mainPage_mainHeading mainPage_vert_space p-0 d-felx flex-column  col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 w-100">
                    <h1 className="display-3">A ONE-STEP SOLUTION 
                    </h1>
                    <p className="lead">TO CATER ALL YOUR DIGITAL NEEDS </p>
                </div>
                 </div>
            </div> 

        );
    }
}
export default Jumbo1;

// <div >
            //     {/* <img src={TT_splash} className="img-fluid" alt="Responsive image"></img> */}
            //     <div className = "jumbotron mainJumboImg .img-fluid. max-width: 100%">
            //         <h1 className = "heading1_mainpage">
            //             content heading 1
            //         </h1>
            //     </div>
            // </div>
            // <img class="ui fluid image" src="/images/wireframe/image.png"></img>