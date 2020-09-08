import React, {Component} from 'react'
import mypic2 from '../../images/mypic2.png';

class Image extends Component{
    render(){
        return (
            <div>
            <img class="ui medium circular image mini image_custom" src={mypic2}></img></div>
        )
    }
}
class IntroJumbo extends Component{
    render(){
        return (
            <div className = "introJumboContainer d-flex flex-column justify-content-center">
               <Image/>
                <h1>Hi !!</h1> <h1>I am Ahmad Kashif</h1>
                <h3 className = "jumboText">A passionate full stack developer</h3>
                <button type="button" className="btn btn-secondary jumboBtn">View Projects -></button>
            </div>
        );
    };
};
export default IntroJumbo;
 