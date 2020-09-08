import React,{Component} from 'react'

class UserInput extends Component{
    
    render(){
        return ( 
        <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
        </div>
        <input type="text" className="form-control" onChange = {this.props.eventHandler} aria-label="Small" />
        </div>
        );
    }
}
export default UserInput;