/** 
 * we can use such dummy components that conain no logic in them at all.
 * 
*/

import React, { Component } from "react";

const para1 = (props)=>{
    return(
        <p onClick = {props.click} className = "text">
        {props.val}
        </p>
        )
    }
    export default para1;