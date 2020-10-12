import React , {Component} from 'react'

import '../DetailView.css'
class Game3Detail extends Component{
    render(){
        return(
            <div>
                <div className = "PTJM1_main">
                    <div className="jumbotron jumbotron-fluid blackOverlay">
                        <div className="container d-flex justify-content-center mt-5">
                            <h1 className="display-4 PTJM1_main_Header">Light Head</h1>
                        </div>
                    </div>  
                </div>
                <div className = "container mt-5">
                    <div className = "row">
                        <div className = "col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className = "iframeContainer w-100 d-flex justify-content-center">
                            <iframe className = "d-flex justify-content-center"width="853" height="480" src="https://www.youtube.com/embed/R0yb1RoG_z8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                                <p> Rising out of the old cemetery, big as an old (macabre) telephone pole. Was this some kind of bizarre art piece the authorities hadn't gotten wise to yet? Even as she stepped out of the car, the megaphones on its "head" screeched to life.</p>
                                <h2 >Get it now:</h2>
                                <ul className = "detailViewLinks">
                                    <a className = "btn detailViewlinkG" href = "https://play.google.com/store/apps/details?id=com.ee.light.head.scary.horror.lamp.forest.siren.story&hl=en"></a>
                                
                                
                                    <a className = "btn detailViewlinkA"></a>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col">
                            <div className = "container detailView mt-4 mb-4">
                                <h2>Background:</h2>
                                <p>Long Trail, Bennington, Vermont forest located in Broceliande, France is known as the "is said to be the forest of the King".
well i did just get permission from my mother. may as well i go and have some fun, hey. . . it's the last days of summer. forest of the king, here i come. . .
This 272-mile-long hiking trail is believed to be where Bennington College student Paula Jean Welden disappeared on December 1, 1946. But she wasn’t the only one. Four others disappeared there between 1945 and 1950, with only one body ever being found.
got it.

This game is a strange man with a lamp instead his head who needs to breach out of the darkened and dangerous odd place at whatever cost.
Are you ready to prove that your reaction is outstanding, shunting between sharp barriers, collecting bonuses, remembering that in the end of every dark path the light of victory awaits?

Siren Head, who is sometimes called Lamp Head, is a hostile cryptid and urban legend created by the Canadian horror artist Trevor Henderson.
It is a tall mysterious humanoid creature that is known for its odd appearance and the various sounds that emanate out of its head, which consists of a metallic pole with sirens attached to it.
</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Game3Detail;