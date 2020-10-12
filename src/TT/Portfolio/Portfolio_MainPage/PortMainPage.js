import React , {Component} from 'react';
import Jumbo1 from './PT_jumbo1/PT_jumbo1'
import NavComp from '../NavComp/NavComp'
import PortfolioDisplayComponent from './PT_portfolioDisp/Pt_portfolioDisp'
class PortMainPage extends Component{
    render(){
        return (
            <div>
                <Jumbo1/>
                <div className = "">
                    <NavComp/>
                    <PortfolioDisplayComponent/>
                </div>
                
            </div>
        )
    }
}
export default PortMainPage;