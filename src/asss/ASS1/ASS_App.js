import React, { Component } from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component{
    state = {
        para:["ahmad","kashif"]
    };
    stateManager(event){
        this.setState({
            para:[event.target.value,event.target.value+"second"]
        });
    }
    setView(){
        
    }
    toggleUsrInpt = false;
    render(){
        if (this.toggleUsrInpt)
        return (
            <div>
            <UserInput eventHandler = {this.stateManager.bind(this)}/>
            <UserOutput val = {this.state.para[0]}/>
            <UserOutput val = {this.state.para[1]}/>
            <button >press me</button>
            </div>
            );
            else
            return (<div></div>);
        }
    }
    
    export default App;