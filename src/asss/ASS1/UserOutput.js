import React,{Component} from 'react'

class UserOutput extends Component{
    render(){
        return(
            <div className="">
            <h1>{this.props.val}</h1>
            </div>
            );
        };
    }
    export default UserOutput;