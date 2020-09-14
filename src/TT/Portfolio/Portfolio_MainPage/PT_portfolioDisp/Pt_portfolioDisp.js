import React ,{Component} from 'react'
import './Pt_portfolioDisp.css'
import PortfolioCard from '../../PortfolioCard/PortfolioCard'
class Pt_portfolioDisp extends Component{
    render(){
        return (
            <div>

                <div className= "container">
                    <p>
                      
                    </p>
                    <div className= "row">
                        <div className= "col">
                            <PortfolioCard/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Pt_portfolioDisp;