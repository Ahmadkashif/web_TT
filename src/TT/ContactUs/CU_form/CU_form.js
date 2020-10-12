import React , {Component} from 'react';
import axios from 'axios'
import './CU_form.css'

class CU_form extends Component{
    email = "contact@twelvetierstechnologies.com"
    fName = document.getElementById("fname");
    lName =  document.getElementById("lname");
    email = document.getElementById("email");
    textArea = document.getElementById("textArea");
    wordCount = 0;

    getData = (e)=>{
        e.preventDefault();
        this.fName = document.getElementById("fname");
        this.lName = document.getElementById("lname");
        this.email = document.getElementById("email");
        this.textArea = document.getElementById("textArea"); 
        axios.post("/api/submit",{
            "fname": this.fName.value,
            "lname": this.lName.value,
            "email" :this.email.value,
            "Message" : this.textArea.value
        });   
    }
    
    

    getWordCount = (Event)=>{    
        let wordCount1 = Event.target.value.length;
        console.log(wordCount1)
        this.setState(
            {
                wordCount : wordCount1,
                fName_val: "",
                lName_val: "",
                email_val: "",
                textArea_val: ""
            }
        )
    }

    state = {
        wordCount :0,
        fName_val: "",
        lName_val: "",
        email_val: "",
        textArea_val: ""
    }

    submitBtnClicked = {}
    render(){
        return (
        <div className = "Cuform mt-3 mb-3 ml-0 mr-0 w-100 d-flex justify-content-center">
            <form className = " container-fluid"  onSubmit = {this.getData} >
                <div className="row w-100 ml-0 mr-0">
                    <div className="col d-flex justify-content-center">
                    <input type="text" className="form-control CU_formsInput" placeholder="First name" required id = "fname" />
                    </div>
                    <div className="col d-flex justify-content-center">
                    <input type="text" id = "lname" className="form-control CU_formsInput" placeholder="Last name" required/>
                    </div>
                </div>
                <div className="row w-100 mt-3 ml-0 mr-0">
                <div className="col d-flex justify-content-center">
                    <input type="email" id = "email" className="form-control CU_formsInput" placeholder="Your Email"required/>
                </div>
                </div>
                <div className="row mt-3 w-100 ml-0 mr-0">
                <div className="col d-flex flex-column justify-content-center">
                    <textarea maxlength="1000" id = "textArea"type="email" className="form-control form-controlTextarea" placeholder=""required onChange = {this.getWordCount}/>
                    <p className = "mt-1">Remaining Words: { 1000 - this.state.wordCount }</p>
                </div>
                </div>
                <div className = "d-flex justify-content-center mt-3">
                    <button type="submit" className="btn btn-primary" disabled       onClick = {this.getData}>Submit</button>
                </div>
                

                
            </form>
            
        </div>
        )
    }
}
export default CU_form;