import React , {Component} from 'react'

import '../DetailView.css'
class Game4Detail extends Component{
    render(){
        return(
            <div>
                <div className = "PTJM1_main">
                    <div className="jumbotron jumbotron-fluid blackOverlay">
                        <div className="container d-flex justify-content-center mt-5">
                            <h1 className="display-4 PTJM1_main_Header">Protect the president</h1>
                        </div>
                    </div>  
                </div>
                <div className = "container mt-5">
                    <div className = "row">
                        <div className = "col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className = "iframeContainer w-100 d-flex justify-content-center">
                            <iframe  className = "d-flex justify-content-center" width="853" height="480" src="https://www.youtube.com/embed/o_u3U1DR--A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-0 col-sm-0">
                            {/* <div className = "container">
                                <h1>share this</h1>
                                <ul className = "detailViewLinks">
                                    <a class="btn btn-primary" href="#" role="button">
                                        <i class="facebook icon detailViewIcons"></i>
                                    </a>
                                    <a class="btn btn-danger" href="#" role="button">
                                        <i class="instagram icon detailViewIcons"></i>
                                    </a>
                                </ul>
                            </div> */}
                            <div className = "container detailView mt-2 mb-2">
                                <h2>Short Description</h2>
                                <p>Protect President Donald Rump the person leading the country into a new era. It's a huge responsibility, don't screw it up!
</p>
                                <h2 >Get it now:</h2>
                                <ul className = "detailViewLinks">
                                    <a className = "btn detailViewlinkG" href = "https://play.google.com/store/apps/details?id=com.mayhem.bodyguard.protect.president&hl=en"></a>
                                
                                
                                    <a className = "btn detailViewlinkA"></a>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col">
                            <div className = "container detailView mt-4 mb-4">
                                <h2>Background:</h2>
                                <p>Donald Rump is going to speak with the audience. You are private Bodyguard for special rescue mission during the ceremony. In this game, you take on the role of a Secret Service bodyguard. Your task is to protect the president of America President Donald Rump at any cost. even the cost of your own life. Be careful and act decisively, rigidly and effectively in critical situations. The safety of the life and health of the US leader depends on you.
</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Game4Detail;