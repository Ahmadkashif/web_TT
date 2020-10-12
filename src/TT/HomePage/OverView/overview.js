import React , {Component} from 'react'

class OverView extends Component{
    render(){
        return(
            <div>
                <div className = "OverView_heading">
                    <h1 className = "display-4 mb-5 mt-2">Overview</h1>
                    <div className = "container">
                    <p className = "OverviewDescrp">
                        Twelve Tiers Technologies is where developers, designers, enthusiasts all come together for one single purpose, <strong>Excellence</strong>. 
                        With a team of hard working and highly skilled IT professionals, we are reshaping the future.
                        <br/> We provide an end-to-end game & app development service where our designers, developers and marketing professionals will make your project a success.

                    </p>
                    </div>
                </div>
            </div>
        );
    };
}

export default OverView