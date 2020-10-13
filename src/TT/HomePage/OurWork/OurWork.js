import React ,{Component} from 'react';
import { useEffect } from 'react';
import './OurWork.css'
import scene1 from '../../../images/Scene1.png'
import scene2 from '../../../images/scene2.png'
import scene3 from '../../../images/scene3.png'
import scene4 from '../../../images/scene4.png'
class OurWork extends Component{
    style={
        backgroundImage:{scene1},
    }
    obj = [scene1, scene2, scene3, scene4];

    state = {
        pic1 :scene1,
        i : 0
    }
    
    getIndex(){
        if(this.state.i < 3){
            this.state.i++;
        }
        else
        this.state.i = 0;

        return this.state.i;
    }
    updateImage = () =>{
       
            return this.obj[this.getIndex()];
       
    }

    doit = ()=> setInterval(() => {
            this.setState(
                {
                    pic1 : this.updateImage()
                })
                console.log("loop");  
        }, 2000);
   

    componentDidMount(){
        console.log("loop");  
        this.doit();
    }
    render(){
        return(
            <div className = "jumbotron mt-0 mb-0 mianJumbo">
               
                <h1 className = "d-flex justify-content-center">
                    Our Work
                </h1>
                <p  className = "d-flex justify-content-center" >Witness how we transform your brilliant idea into an inspiring reality on millions of devices</p>
                <div>

                </div>
                <div className = "d-flex justify-content-center pl-0 pr-0"  style = {this.style}>
                <img class="img" src={this.state.pic1}/>
                </div>
                <div className = "d-flex justify-content-center mt-5">
                <a class="btn btn-primary" href="/portfolio/AppGame" role="button">View Our Work</a>
                </div>
            </div>
        )
    }
}
export default OurWork;