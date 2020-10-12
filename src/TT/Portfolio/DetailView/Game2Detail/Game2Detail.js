import React , {Component} from 'react'

import '../DetailView.css'
class Game2Detail extends Component{
    render(){
        return(
            <div className = "detailView">
                <div className = "PTJM1_main">
                    <div className="jumbotron jumbotron-fluid blackOverlay">
                        <div className="container d-flex justify-content-center mt-5">
                            <h1 className="display-4 PTJM1_main_Header">Siren Head</h1>
                        </div>
                    </div>  
                </div>
                <div className = "container mt-5">
                    <div className = "row">
                        <div className = "col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className = "iframeContainer w-100 d-flex justify-content-center">
                            <iframe className = "d-flex justify-content-center"  width="853" height="480" src="https://www.youtube.com/embed/ada_asaGeo8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                            <div className = "container mt-2 mb-2">
                                <h2>Short Description</h2>
                                <p>A local high School is over and my friends want me to go camping with them in Hoia-Baciu forest its summer break. You dreadfully go to the outdoors for some fun but when you are the last one to arrive in forest.</p>
                                <h2 >Get it now:</h2>
                                <ul className = "detailViewLinks">
                                    <a className = "btn detailViewlinkG" href = "https://play.google.com/store/apps/details?id=com.ee.siren.head.scary.horror.forest.story&hl=en"></a>
                                
                                
                                    <a className = "btn detailViewlinkA"></a>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col">
                            <div className = "container mt-4 mb-5">
                                <h2>Background:</h2>
                                <p>So. . . Forest Hoia-Baciu located in northwestern Romania is known as the "Bermuda triangle" of Romania. Well i did just get my camp. may as well i go and have some fun, hey. . . it's the first day of summer. Hoia-Baciu forest, here i come. . .welcome to south point Hoia-Baciu forest!
it's dark out here so use flashlight.don't shine your flashlight too long, it could irritate people, or something.
You feel something isn't right with this place. Where did everyone go.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Game2Detail;