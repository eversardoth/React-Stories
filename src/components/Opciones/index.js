import React from "react";
import Opcion from "../Opcion";

function Opciones(props){
    return (
        <div className='opciones'>
            {props.opciones.map((e,i)=>(
                <Opcion key={e} value={e} opcion={props.textoOpcion[i]} onClick={props.onClick}/>
            ))}
        </div>
    )
}

export default Opciones