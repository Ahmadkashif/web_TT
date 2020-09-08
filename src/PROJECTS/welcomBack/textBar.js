import React,{Component} from "react";

class TextBar extends Component{
    render(){
        return (
            <div>
            <div className="input-group textBar">
            <input type="text" className="form-control textBarInput"/>
            <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">Add ToDo</button>
            </div>
            </div>
            </div>
            );
        };
    }
    export default TextBar;