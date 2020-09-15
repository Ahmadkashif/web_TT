import React ,{Component} from 'react';
import Caro1 from '../../../images/PortfolioSplash1.jpg'
import Caro2 from '../../../images/indieGamesTemp.png'
import './OurWork.css'
class OurWork extends Component{
    
    render(){
        return(
            <div>
                
            <h1 className = "d-flex justify-content-center">
                Our Work
            </h1>
                <div className = "CaroCust">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner CaroCust">
                            <div class="carousel-item active">
                            <img src={Caro1} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src={Caro2} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default OurWork;