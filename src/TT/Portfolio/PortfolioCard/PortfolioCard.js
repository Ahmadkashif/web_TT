import React , {Component} from 'react'
import './Portfoliocard.css'
import indieGameThumbnail from '../../../images/indieGamesTemp.png'

class PortfolioCard extends Component{

    render(){
        return (
            <div>
                {/* <div className="ui special cards"> */}
                    <div className="card portfolioCust">
                        <div className="blurring dimmable image">
                        <div className="ui dimmer">
                            <div className="content">
                            <div className="center">
                                <div className="ui inverted button">Add Friend</div>
                            </div>
                            </div>
                        </div>
                        <img src={indieGameThumbnail} className = "portFolioImg"/>
                        </div>
                        <div className="content">
                        <a className="header">Team Fu</a>
                        <div className="meta">
                            <span className="date">Created in Sep 2014</span>
                        </div>
                        </div>
                        <div className="extra content">
                        <a>
                            <i className="users icon"></i>
                            2 Members
                        </a>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        )
    }
}
export default PortfolioCard