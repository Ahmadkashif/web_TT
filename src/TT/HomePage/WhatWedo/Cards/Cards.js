import React,{Component} from 'react'
import './cards.css'
class Card extends Component{
    render(){
        return(
                <div className="card rounded-lg cardCust ">
                    <div className="card-body d-flex flex-column justify-content-center">
                    <img class="CardImage mx-auto" src={this.props.icon}/>
                        <h5 className="card-title d-flex justify-content-center mt-2">{this.props.label}</h5>
                            <p className="card-text CardTextCust d-flex justify-content-center">{this.props.info}</p>
                        <div className = "d-flex justify-content-center">
                        <a href="/whatwedo" className="card-link ">Learn more{' >'}</a>
                        </div>
                    </div>
                </div>
            
        );
    }
}
export default Card;