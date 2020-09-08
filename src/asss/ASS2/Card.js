import React,{Component} from 'react';
import Inline from './Inline';

class Card extends Component{
    output= '';
    render(){
        
        if(this.props.textLen <= 5){
            this.output = "text too short";
        }
        else{
            this.output = "text ok";
        }
        
        return (
            <div>
            <p> {this.output}</p>
            {
                this.props.str.map((element,index) => (<Inline value = {element} ind = {index} rem = {this.props.rem}/>))
            }
            </div>
            );
        };
    };
    export default Card;