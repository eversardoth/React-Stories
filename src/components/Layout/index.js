import React from "react";
import data from '../data.json'
import Opciones from "../Opciones";
import Historia from "../Historia";
import Recordatorio from "../Recordatorio";

class Layout extends React.Component{

    constructor(props){
        super(props)
        this.state = {contador: 1, posicion: '', historial: []  }
        this.handleClick = this.handleClick.bind(this)
        this.options = props.options
    }

    componentWillUnmount(){
        alert('Su tiempo de juego ha terminado')
    }
    
    handleClick(event){
        let n = this.state.contador.toString().length
        if(this.state.contador.toString()===(data.slice(-1)[0]).id.slice(0,n)){
            alert('Fin.')
        }else{
            this.setState((prevState)=>({contador: prevState.contador + 1,
                posicion: event.target.textContent,
                historial: [...prevState.historial, prevState.posicion ]}))
        }
    }

    render(){

        let completePos = this.state.contador.toString().concat(this.state.posicion.toLowerCase())
        let objetoActual = data.find(element=>element.id===completePos)
        return (<div className='layout'>
        <Historia text={objetoActual.historia}/>
        <Opciones opciones={this.options} textoOpcion={Object.values(objetoActual.opciones)} onClick={this.handleClick}/>
        <Recordatorio last={this.state.posicion} historial={this.state.historial}/>
        </div>); 
    }
}

export default Layout;

