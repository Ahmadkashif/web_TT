import React , {Component} from 'react'
import './Corevals.css'
import C1 from '../../../images/COREvals1.jpg'
import C2 from '../../../images/COREvals2.jpg'
import C3 from '../../../images/COREvals3.jpg'
import C4 from '../../../images/COREvals4.jpg'
import C5 from '../../../images/COREvals5.jpg'
import C6 from '../../../images/COREvals6.jpg'

class Corevals extends Component{
    render(){
        return(
            <div>
                <div className = "container">
                    <h1 className = "display-3 d-flex justify-content-center pb-3 ABT_vrtSpc">
                        Our Core Values
                    </h1>
                    <div className = "row pt-3 ABT_vrtSpc">
                        <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="card CorevalsCard" >
                            <img src={C1} className="card-img-top" alt="..."/>
                        </div>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="card CorevalsCard" >
                            <img src={C2} className="card-img-top" alt="..."/>
                        </div>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="card CorevalsCard" >
                            <img src={C3} className="card-img-top" alt="..."/>
                        </div>
                        </div>
                    </div>
                    <div className = "row pt-3 ABT_vrtSpc">
                        <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="card CorevalsCard" >
                            <img src={C4} className="card-img-top" alt="..."/>
                        </div>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="card CorevalsCard" >
                            <img src={C5} className="card-img-top" alt="..."/>
                        </div>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="card CorevalsCard" >
                            <img src={C6} className="card-img-top" alt="..."/>
                        </div>
                        </div>
                    </div>

                   
                </div>
            </div>
        )
    }
}
export default Corevals;