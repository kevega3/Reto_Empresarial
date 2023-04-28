import React from "react";
import "../styles/Separador.css";
function Separador(props){
    return(
        <div className="Contedor_Mayor_Separador">
            <div className="Contenedor_Separador" >
            
                <h1 className="Titulo_Seárador">{props.titulo}</h1>
            
            </div>
        </div>
    );
}


export default Separador;