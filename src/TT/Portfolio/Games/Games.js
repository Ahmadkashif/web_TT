import React ,{Component} from 'react'

class Games extends Component{
    render(){
        return(
            <div className = "container mb-5">
                <div className = "row  pl-1 pr-1 m-1">
                <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center pt-2">
                    <a className = "portfolioViewProductLink" href = "/game1Detail">
                        <div className = "AppGame">
                        <div className = "Game1">
                            <div className = "overlay blackOverlay d-flex flex-column justify-content-center">
                                <h1 className = " display-4 overlayText ProductName">
                                    Scary Clown
                                </h1>
                                <h1 className = "display-4 overlayText">
                                    <strong>View Product</strong>
                                    </h1>
                            </div>
                        </div>
                        </div>
                        </a>
                    </div>
                    <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center pt-2">
                    <a className = "portfolioViewProductLink" href = "/game2Detail">
                        <div className = "AppGame">
                        <div className = "Game2">
                            <div className = "overlay blackOverlay d-flex flex-column justify-content-center">
                                <h1 className = " display-4 overlayText ProductName">
                                    Siren Head
                                </h1>
                                <h1 className = "display-4 overlayText">
                                    <strong>View Product</strong>
                                    </h1>
                            </div>
                        </div>
                        </div>
                        </a>
                    </div>
                    <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center pt-2">
                    <a className = "portfolioViewProductLink" href = "/game3Detail">
                        <div className = "AppGame">
                        <div className = "Game3">
                            <div className = "overlay blackOverlay d-flex flex-column justify-content-center">
                                <h1 className = " display-4 overlayText ProductName">
                                    Light Head
                                </h1>
                                <h1 className = "display-4 overlayText">
                                    <strong>View Product</strong>
                                    </h1>
                            </div>
                        </div>
                        </div>
                        </a>
                    </div>
                    
                </div>
                <div className = "row  pl-1 pr-1 m-1">
                <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center pt-2">
                    <a className = "portfolioViewProductLink" href = "/game4Detail">
                        <div className = "AppGame">
                        <div className = "Game4">
                            <div className = "overlay blackOverlay d-flex flex-column justify-content-center">
                                <h1 className = " display-4 overlayText ProductName">
                                    Protect The President Game
                                </h1>
                                <h1 className = "display-4 overlayText">
                                    <strong>View Product</strong>
                                    </h1>
                            </div>
                        </div>
                        </div>
                        </a>
                    </div>
                    <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center pt-2">
                    <a className = "portfolioViewProductLink" href = "/game5Detail">
                        <div className = "AppGame">
                        <div className = "Game5">
                            <div className = "overlay blackOverlay d-flex flex-column justify-content-center">
                                <h1 className = " display-4 overlayText ProductName">
                                    Virtual School
                                </h1>
                                <h1 className = "display-4 overlayText">
                                    <strong>View Product</strong>
                                    </h1>
                            </div>
                        </div>
                        </div>
                        </a>
                    </div>
                    <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center pt-2">
                    <a className = "portfolioViewProductLink" href = "#">
                        <div className = "AppGame">
                        <div className = "Game6">
                            <div className = "overlay blackOverlay d-flex flex-column justify-content-center">
                                <h1 className = " display-4 overlayText ProductName">
                                    Product Name
                                </h1>
                                <h1 className = "display-4 overlayText">
                                    <strong>View Product</strong>
                                    </h1>
                            </div>
                        </div>
                        </div>
                        </a>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Games;