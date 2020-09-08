import React,{Component} from 'react';
class Card extends Component{
    style = {
        width:"18rem"
    };
    render(){

        return (
            <div>
            <div className="card" style = {this.style} onClick = {this.props.click} id = {this.props.id}>
            <img className="card-img-top" src="https://picsum.photos/200" alt="Card image cap"/>
            <div className="card-body" id = {this.props.id}>
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
            );
        };
    };
    export default Card;
    
    //https://picsum.photos/200