import React , {Component } from 'react'
import Navbar from '../../navbar/navbar'
import Footer from '../../footer/footer'
import './DetailView.css'
class DetailView extends Component{
// className = "UtubeEmbed"
    render(){
        return (
            <div className = "detailView">
                <Navbar/>
                <div className = "PTJM1_main">
                    <div className="jumbotron jumbotron-fluid blackOverlay">
                        <div className="container d-flex justify-content-center mt-5">
                            <h1 className="display-4 PTJM1_main_Header">{this.props.title}</h1>
                        </div>
                    </div>  
                </div>
                <div className = "container mt-5">
                    <div className = "row">
                        <div className = "col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className = "iframeContainer w-100 d-flex justify-content-center">
                                <iframe className = "d-flex justify-content-center" width="1019" height="573" src="https://www.youtube.com/embed/R0yb1RoG_z8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                            <div className = "container detailView">
                                <h2>Short Description</h2>
                                <p></p>
                                <ul className = "detailViewLinks">

                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className = "row">
                        <div className = "col">
                            <div className = "container detailView">
                                <h2>Background:</h2>
                                <p></p>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default DetailView;
