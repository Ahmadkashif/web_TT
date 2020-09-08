import React,{Component} from 'react';
class Inline extends Component{
    divClicked(){

    };
    render(){
        return (
            <div >
                <p onClick = {this.props.rem} val = {this.props.value} index = {this.props.ind}>{this.props.value}</p>
            </div>
        );
    }
    }
export default Inline;