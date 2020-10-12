import React , {Component} from 'react'
import './Corevals.css'

class Corevals extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render(){
        return(
            <div>
                <div className = "container">
                <p className = "display-4 ABTMAInHeading mt-5">Twelve Tiers Technologies is a boutique digital transformation consultancy company. Since 2018 we have been working as innovation partners for startups and reliable technology partner for enterprises by building impactful digital engineering
                         solutions powered by the latest technologies.</p>
                <h1 className = "display-3 d-flex justify-content-center pb-3 ABT_vrtSpc CorevalsMainHeading1">
                        Our Mission
                    </h1>
                    <div className = "">
                        <p className = "display-3 CorevalsMainHeading1_para">
                        Our mission is to assist enterprises to accelerate the implementation of new technologies, untangle complex problems that always arise during digital transformation, and orchestrate ongoing innovation. Twelve Tiers Technologies leads the process from ideation and concept 
                        to delivery, either it is a consumer-oriented app or a transformative enterprise-class solution.
                        </p>
                    </div>
                </div>
                <div className = "container">
                <h1 className = "display-3 d-flex justify-content-center pb-3 ABT_vrtSpc CorevalsMainHeading1">
                        Our Vision
                    </h1>
                   
                    <p className = "display-3 CorevalsMainHeading1_para">
                    Our Vision is to recuperate the efficiency of the delivered solution by offering high-quality enterprise mobility solutions. Our team of experts addresses client goals with professional consultations that offer optimized decisions and cost-effective reliable solutions. 

                        </p>

                        <h1 className = "mt-5 display-3 d-flex justify-content-center pb-3 ABT_vrtSpc CorevalsMainHeading">
                        <strong>Our Core Values</strong>
                    </h1>
                    <div className = "row ABT_vrtSpc">
                        <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className = "C1 COREvalsContent d-flex flex-column">
                                <div className = " d-flex flex-column justify-content-center my-auto">
                                    <h1 className = "COREvalsContent_header ">
                                    <strong>Choose Joy</strong>
                                    </h1>
                                    <p className = "COREvalsContent_para container">
                                    We trust in maintaining a situation of appreciation and 
                                    openness. On top, our customers love the way we work.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12">

                            <div className = "C2 COREvalsContent d-flex flex-column">
                            <div className = " d-flex flex-column justify-content-center my-auto">
                               
                                <h1 className = "COREvalsContent_header ">
                                    <strong>High Integrity</strong>
                                    </h1>
                                <p className = "COREvalsContent_para container">
                                    We maintain our high beliefs and professionalism throughout the process, and place great emphasis on integrity and respect
                                </p>
                               
                                </div>
                            </div>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className = "C3 COREvalsContent d-flex flex-column">
                            <div className = " d-flex flex-column justify-content-center my-auto">
                                    <h1 className = "COREvalsContent_header ">
                                    <strong> Be Tenacious</strong>
                                    </h1>
                                    <p className = "COREvalsContent_para container">
                                    Can Do and Will Do. We endeavor to locate the best and most genuine answers for our customers instead of simplest or least expensive quick-fix
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "row mt-1 mb-5 ABT_vrtSpc">
                    <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className = "C4 COREvalsContent d-flex flex-column">
                            <div className = " d-flex flex-column justify-content-center my-auto">
                                    <h1 className = "COREvalsContent_header ">
                                    <strong>Diversity Rules</strong>
                                    </h1>
                                    <p className = "COREvalsContent_para container">
                                    We love working in diverse lifestyles and backgrounds while encouraging
                                     the free exchange of thoughts and ideas.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className = "C5 COREvalsContent d-flex flex-column">
                            <div className = " d-flex flex-column justify-content-center my-auto">
                                    <h1 className = "COREvalsContent_header ">
                                    <strong> Dream Big</strong>
                                    </h1>
                                    <p className = "COREvalsContent_para container">
                                    We provide clients the lifestyle they’ve always wanted.
                                     In addition to solutions, we provide a gateway to success
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className = "C6 COREvalsContent d-flex flex-column">
                            <div className = " d-flex flex-column justify-content-center my-auto">
                                    <h1 className = "COREvalsContent_header ">
                                    <strong>Give Back</strong>
                                    </h1>
                                    <p className = "COREvalsContent_para container">
                                    We are focused on transforming the businesses we serve into better places through genuine dealings and CSR exercises
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Corevals;