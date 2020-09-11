import React , {Component} from 'react'
import Jumbo1 from './jumbo1/jumbo1'
import Body from './AboutUsBody/Body'
class AboutPage extends Component{

    render(){
        return (
            <div>
                <Jumbo1/>
                <Body/>
            </div>
        )
    }
}

export default AboutPage