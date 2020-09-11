import React,{Component} from 'react'
import './cards.css'
class Card extends Component{
    render(){
        return(
                <div className="card rounded-lg cardCust ">
                    <div className="card-body ">
                    <img class="ui medium circular image" src={this.props.icon}/>
                        <h5 className="card-title">{this.props.label}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className = "">
                        <a href="#" className="card-link">Learn more{' >'}</a>
                        </div>
                    </div>
                </div>
            
        );
    }
}
export default Card;