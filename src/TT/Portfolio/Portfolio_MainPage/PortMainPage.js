import React , {Component} from 'react';
import Jumbo1 from './PT_jumbo1/PT_jumbo1'
import PortfolioDisplayComponent from './PT_portfolioDisp/Pt_portfolioDisp'
class PortMainPage extends Component{
    render(){
        return (
            <div>
                <Jumbo1/>
                <PortfolioDisplayComponent/>
            </div>
        )
    }

}
export default PortMainPage;