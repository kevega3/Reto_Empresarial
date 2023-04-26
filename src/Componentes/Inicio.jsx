import React from "react";
import '../styles/Inicio.css';

function Inicio(props){
    return(
        <div className="row Contenedor_Inicio">
            
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <div className="Inicio_Columas">
                        <div className="Segundo_Columna_Texto">
                            <h1 className='Titulo_Inicio'>{props.titulo}</h1>
                            <p className="Lorem_Inicio">{props.descripcion}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6  col-md-6 col-sm-12">
                    <div className="Inicio_Columas">
                        <div className="Segundo_Columna_Imagen">
                            <div className="Contenedor_Img">
                                <img src={props.img} width={'90%'}  className="Img_Inicio" alt="" />
                            </div>
                        
                        </div>    
                    </div>
                </div>
           
            
        </div>
    );
}

export default Inicio;