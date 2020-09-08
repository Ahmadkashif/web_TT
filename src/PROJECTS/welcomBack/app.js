import React,{ Component } from "react";
import TextBar from "./textBar.js"
class app extends Component{
    state = {
        n_todos :0,
        todoArray : []
    };
    inputChanged(that,X){
        let arr = this.state.todoArray;
        this.setState({
        });
    };
    render(){
        return (
            <div>
                <div className = "container">
                    <div classname = "row">
                        <div className = "col-xl-2 col-lg-2 col-md-2 col-sm-1"></div>
                        <div className = "col-xl-8 col-lg-8 col-md-8 col-sm-10 d-flex justify-content-center">
                            <TextBar />
                        </div>
                        <div className = "col-xl-2 col-lg-2 col-md-2 col-sm-1"></div>
                    </div>
                </div>
            </div>
        );
    };
};
export default app;