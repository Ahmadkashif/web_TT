import React , {Component} from 'react';
import './CU_form.css'
class CU_form extends Component{
    render(){
        return (
        <div className = "CU_form">
            <form>
                <div className="form-group ">
                    <label for="exampleInputEmail1" className = "CU_form_labels">Email address</label>
                    <input type="email" className="form-control inputCUForm" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1"  className = "CU_form_labels">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        )
    }
}
export default CU_form;