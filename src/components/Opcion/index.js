import React from "react";

function Opcion(props){

    return (
        <div className='opcion'><button className='botones' id={props.value} onClick={props.onClick}>{props.value}</button><h2>{props.opcion}</h2></div>
    )
}

export default Opcion;