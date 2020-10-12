import React , {Component} from 'react'
import './Cu_map.css'
class Cu_map extends Component{
    render(){
        return(
            <div>
                <iframe className = "Cu_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.746543595748!2d74.34799311510751!3d31.503649855119786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919044ed08f1b7d%3A0xa010066a3eb82ded!2sAl%20Hafeez%20Business%20center!5e0!3m2!1sen!2s!4v1600859213349!5m2!1sen!2s" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        )
    }
}
export default Cu_map;