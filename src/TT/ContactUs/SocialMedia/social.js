import React , {Component} from 'react'
import './social.css'
class Social extends Component{
    render(){
        return (
            <div >
                <ul className = "detailViewLinks">
                    <a class="btn btn-primary py-auto fb" href="https://www.facebook.com/twelvetiers/" role="button">
                        <i class="facebook icon socialIcons"></i>
                    </a>
                    <a class="btn btn-danger" href="#" role="button">
                        <i class="instagram icon socialIcons"></i>
                    </a>
                    <a class="btn btn-primary py-auto" href="#" role="button">
                        <i class="twitter icon socialIcons"></i>
                    </a>
                    <a class="btn btn-primary py-auto linkedin" href="https://www.linkedin.com/company/twelve-tiers-technologies/" role="button">
                        <i class="linkedin icon socialIcons"></i>
                    </a>
                </ul>
            </div>
        )
    }
}
export default Social;