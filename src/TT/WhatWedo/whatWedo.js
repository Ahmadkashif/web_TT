import React ,{Component} from 'react'
import Card from './Cards/Cards'
import GamingIcon from '../../images/icons/gaming.png'
class WWedo extends Component{

    state= {
        cardNames : ["Computer Games",
                "Mobile Apps",
                "Web Development",
                "UI/UX Design",
                "Digital Marketing"
                ]
    };
    render(){
        return(
            <div>
                <div className = "container">
                <div className="jumbotron jumbotron-fluid" id = "WWeDoJumbo">
                    <h1 className = "display-4">What We Do</h1>

                    <div className = "row">
                        <div className = "col">
                       <Card icon = {GamingIcon} label = {this.state.cardNames[0]}/>
                        </div>
                        <div className = "col"></div>
                        <div className = "col"></div>
                    </div>
                    <div className = "row">
                        
                    </div>
                </div>
                </div>
            </div>
        )
    };
}
export default WWedo;