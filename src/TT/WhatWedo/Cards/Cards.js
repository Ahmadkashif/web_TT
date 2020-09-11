import React,{Component} from 'react'
import './cards.css'
class Card extends Component{
    render(){
        return(
            <div>
                <div className="card rounded-2">
                    <div className="card-body ">
                    <img class="ui medium circular image" src={this.props.icon}/>
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;