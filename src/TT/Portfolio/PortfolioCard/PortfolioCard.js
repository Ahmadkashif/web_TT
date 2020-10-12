import React , {Component} from 'react'
import './Portfoliocard.css'
import indieGameThumbnail from '../../../images/gamer.jpg'

class PortfolioCard extends Component{

    render(){
        return (
            <div>
                {/* <div className="ui special cards"> */}
                <div className="card portfolioCust" >
                    <img src={indieGameThumbnail} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    </div>
                </div>
                {/* </div> */}
            </div>
        )
    }
}
export default PortfolioCard