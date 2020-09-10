import React, {Component} from 'react'
// import
import TT_splash from '../../images/TT_splash-1.jpg'
class Jumbo1 extends Component{
    render(){
        return(
             <div className="jumbotron jumbotron-fluid ui fluid image" background-image ="url({TT_splash})" id = "mainsplash">
                 {/* <img className="ui fluid image" src={TT_splash}></img> */}
                <div className="container mainPage_mainHeading">
                    <h1 className="display-1">The next tech giant</h1>
                    {/* <p className="lead">This is a tagline to be added.</p> */}
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