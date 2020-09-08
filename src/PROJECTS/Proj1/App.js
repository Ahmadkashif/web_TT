import React, {Component} from 'react'
import Navbar from './navbar'
import IntroJumbo from './introJumboTron'
class App extends Component{
    render(){

        return (
         <div>
            <div className = "container">
                <div className = "row">
                    <div className = "col">
                    <div className = "navbar_container">
                    <Navbar/>
                    </div> 
                    </div>
                </div>
            </div>
            <div className = "container">
                <div className = "row">
                    <div className = "col"></div>
                    <div className = "col-10 ">
                        <IntroJumbo/>
                    </div>
                    <div className = "col"></div>
                </div>
            </div>
         </div>
        );
    };
};
export default App;