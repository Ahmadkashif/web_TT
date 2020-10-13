import React ,{Component} from 'react'

class Apps extends Component{
    render(){
        return(
            <div className = "container mb-5">
                <div className = "row  pl-1 pr-1 m-1">
                <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center pt-2">
                    <a className = "portfolioViewProductLink" disabled>
                        <div className = "AppGame">
                        <div className = "App1">
                            <div className = "overlay blackOverlay d-flex flex-column justify-content-center">
                                <h1 className = " display-4 overlayText ProductName">
                                    Shophood
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
                    <a className = "portfolioViewProductLink"  disabled>
                        <div className = "AppGame">
                        <div className = "App2">
                            <div className = "overlay blackOverlay d-flex flex-column justify-content-center">
                                <h1 className = " display-4 overlayText ProductName">
                                    Seeksi
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
                    <a className = "portfolioViewProductLink" >
                        <div className = "AppGame">
                        <div className = "App3">
                            <div className = "overlay blackOverlay d-flex flex-column justify-content-center">
                                <h1 className = " display-4 overlayText ProductName">
                                    StreamIT
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
export default Apps;