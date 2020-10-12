import React ,{Component} from 'react'
import './Pt_portfolioDisp.css'
import PortfolioCard from '../../PortfolioCard/PortfolioCard'
class Pt_portfolioDisp extends Component{
    render(){
        return (
            <div>

                <div className= "container">
                    
                    <p>
                        aisncd yabhsdb ybybh  habsydfahdbtc rcvgavsd a sdnaskd uansudjoasd jnuasdasndj n habsdasidn uabsjdasudnas juasdasnfb o a sh
                    </p>
                    <div className= "row d-flex justify-content-center">
                        <div className= "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                            <PortfolioCard/>
                        </div>
                        
                        <div className= "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                            <PortfolioCard/>
                        </div>
                        
                        <div className= "col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                            <PortfolioCard/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Pt_portfolioDisp;