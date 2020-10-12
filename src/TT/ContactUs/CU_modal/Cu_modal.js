import React , {Component } from 'react'
import '../ContactUs.css'
class Cu_modal extends Component{
    render(){
        return(
            
            <div className = "CU_modal_content  mx-auto my-auto">
                <div className = "container d-flex flex-column">
                    <div className = "d-flex">
                        <a className = "p-0 m-0 ContactViewIcons" href = "https://www.facebook.com/twelvetiers/">
                        <i class="facebook icon"></i>
                        </a>
                        <p className = "p-3 w-100 ContactViewLinks d-flex justify-content-center">facebook.com/twelvetiers</p>
                    </div>
                    <div className = "d-flex">
                        <a className = "p-0 m-0 ContactViewIcons" href = "https://pk.linkedin.com/company/twelve-tiers-technologies?trk=companies_directory">
                        <i class="linkedin icon "></i>
                        </a>
                        <p className = "p-3 w-100 ContactViewLinks d-flex justify-content-center">Twelve Tiers Technologies</p>
                    </div>
                    <div className = "d-flex">
                        <a className = "p-0 m-0 ContactViewIcons">
                        <i class="envelope outline icon"></i>
                        </a>
                        <p className = "p-3 w-100 ContactViewLinks d-flex justify-content-center">contact@twelvetierstechnologies.com</p>
                    </div>
                    <div className = "d-flex">
                        <a className = "p-0 m-0 ContactViewIcons">
                        <i className="home icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cu_modal