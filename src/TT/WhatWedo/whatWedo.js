import React ,{Component} from 'react'

class WWedo extends Component{

    render(){
        return(
            <div>
                <div className = "container">
                <div className="jumbotron jumbotron-fluid" id = "WWeDoJumbo">
                    <h1 className = "display-4">What We Do</h1>

                    <div className = "row">
                        <div className = "col">
                        <div className="card" >
                            <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
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