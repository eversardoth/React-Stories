function Recordatorio(props){

    return(
        <div className='recordatorio'>
            <h3>Selección anterior: {props.last}</h3>
            <h4>Historial de opciones elegidas: </h4>
            <ul>
                {props.historial.map((e,i)=>(e===''?null:<li key={i.toString()}>{e}</li>))}
            </ul>
        </div>
    )

}

export default Recordatorio;