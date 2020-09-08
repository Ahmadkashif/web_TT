import React from 'react';

const Form = props =>{
    return (
        <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
        </div>
        <input type="text" className="form-control" aria-label="Small" onChange = {props.Handler}
         aria-describedby="inputGroup-sizing-sm"/>
        </div>
        );
    }
    export default Form;