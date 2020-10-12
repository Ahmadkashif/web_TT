import React , {Component} from 'react'

import '../DetailView.css'
class Game5Detail extends Component{
    render(){
        return(
            <div>
                <div className = "PTJM1_main">
                    <div className="jumbotron jumbotron-fluid blackOverlay">
                        <div className="container d-flex justify-content-center mt-5">
                            <h1 className="display-4 PTJM1_main_Header">Virtual School</h1>
                        </div>
                    </div>  
                </div>
                <div className = "container mt-5">
                    <div className = "row">
                        <div className = "col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className = "iframeContainer w-100 d-flex justify-content-center">
                            <iframe className = "d-flex justify-content-center" width="853" height="480" src="https://www.youtube.com/embed/HZZZC6UglNU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
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
                                <p>An attention-grabbing High school game where you can enjoy virtual school life. Get in virtual school game and step in the virtual class and attend all sessions. Experience this Virtual High school simulator game with your friends.</p>
                                <h2 >Get it now:</h2>
                                <ul className = "detailViewLinks">
                                    <a className = "btn detailViewlinkG"></a>
                                
                                
                                    <a className = "btn detailViewlinkA"></a>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col">
                            <div className = "container detailView mt-4 mb-4">
                                <h2>Background:</h2>
                                <p>This haunted horror mansion escape game is the ultimate survival game in which you need to make a scary escape plan and search for the keys to escape from the scary clown horror house. The story scary clown horror survival Games revolves around how smartly you play because you have only five days to escape from the scary clown house, quietly search key in drawers and cupboards to open the apartments. In this clown survival games, many clues are here to solve horror puzzle games, little time to find clues and escape from the traps set.
Now the friends must overcome their own personal fears to battle the murderous, bloodthirsty clown in a haunted house of this game Scary Horror Clown Escape Game. The car broke down just adjacent to the house, these lads came in for some help and it seems they shouldn’t have come near the devils den rather continue their journey on the other side of the town, but adventure and mystery attracts the passers-by to search for the answers and now the gang has to escape from the place in order to stay alive. The evil Pennywise is the embodiment of an ancient evil creature called It. It had its original shape as a yellow light called death light, existing in the Macro Universe (Macroverse), arriving at Earth for a long time.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Game5Detail;