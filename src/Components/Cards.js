import React, { Component } from 'react';
import COMP from './COMP'
import Form from './form'
class Cards extends Component{
    
    state = {
        images:["https://picsum.photos/200/300"],
        paras:["changed paragraph","unchanged paragraph","passed on info"],
        H1:"my bad"
        
    };
    inputHandler = event =>{
        this.setState(
            {
                images:["https://picsum.photos/200/300"],
                paras:["changed paragraph","unchanged paragraph","passed on info"],
                H1:event.target.value
                
            }
        )
        
    };
    btnHandler = (alrt)=>{
        alert(alrt);
        this.setState({
            images:["https://picsum.photos/200/300"],
            paras:["ooochanged paragraph","unchanged paragraph","passed on info changed"]
        });
    };
    render(){
        return (
            <div className="card">
            <img className="card-img-top w-100" src={this.state.images[0]} alt="Card image cap"/>
            <h1 className = "text">{this.state.H1}</h1>
            <div className="card-body">
            <p className="card-text text">{this.state.paras[0]}</p>
            <COMP click={this.btnHandler.bind(this,"hello there")} val = {this.state.paras[2]}/>
            <Form Handler = {this.inputHandler}/>
            <button type="button" onClick = {this.btnHandler.bind(this,"hello")} class="btn btn-primary">Primary</button>
            </div> 
            </div>
            )
        };
    }
    //
    
    export default Cards;