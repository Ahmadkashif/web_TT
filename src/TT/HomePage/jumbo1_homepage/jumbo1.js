import React, {Component} from 'react'
// import
class Jumbo1 extends Component{
    render(){
        return(
             <div className="jumbotron jumbotron-fluid ui fluid image" background-image ="url({TT_splash})" id = "mainsplash">
                 {/* <img className="ui fluid image" src={TT_splash}></img> */}
                <div className="container mainPage_mainHeading">
                    <h1 className="display-3">When you need coding, it better be Phenomenal. </h1>
                    <p className="lead">Come join hands with us as we specialize in Mobile Game & App Development for a mesmerizing experience</p>
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