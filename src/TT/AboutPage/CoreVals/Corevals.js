import React , {Component} from 'react'
import './Corevals.css'
import C1 from '../../../images/COREvals1.jpg'
class Corevals extends Component{
    render(){
        return(
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "col">
                        <div className="card" >
                            <img src={C1} className="card-img-top" alt="..."/>
                        </div>
                        </div>
                        <div className = "col">
                            
                        </div>
                    </div>
                    <div className = "row">
                    </div>
                </div>
            </div>
        )
    }
}
export default Corevals;