/** 
 * 
 useState is a very important hook provided by react... it has the following criteria:
 we use the useState method and pass in our state object.
once that is done , the useState method returns an array back with exactly two elements.
one being the current state, and the nest one being a method responsible to render back if he state has changed.

 const [firstState,changeState] = useState(state);

 we use firstState in our component for the current state that is rendered, and changeState is an event that 
 renders when the state is changed.
*/
import React, { useState } from 'react';
const Cards = props =>
{
    const card_width = "w-100";
    const state = {
        images:["https://picsum.photos/200/300"],
        paras:["para in hooks"]
    };

    const [firstState,changeState] = useState(state);

    const btnEventHandler = ()=>{
        changeState(
            {
                images:["https://picsum.photos/200/300"],
                paras:["changed paragraph"]
            }
        );
    };
    console.log(changeState);
    return (
        <div className="card">
        <img className={"card-img-top" + card_width}    src={firstState.images[0]} alt="Card image cap"/>
        <div className="card-body">
        <p className="card-text text">{firstState.paras[0]}</p>
        <button type="button" onClick = {btnEventHandler} class="btn btn-primary">Primary</button>
        </div>
        </div>
        )
    }
    
    
    export default Cards;