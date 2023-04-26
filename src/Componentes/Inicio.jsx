import React from "react";
import '../styles/Inicio.css'
import '../styles/Boostrap.css'
function Inicio(props){
    return(
        <div className="container-fluid Contenedor_Inicio">
            <div className="row ">
                <div className="col-lg-6 col-md-5 col-sm-12 ">
                    <div className="Inicio_Columas">
                            <h1 className='Titulo_Inicio'>{props.titulo}</h1>
                            <p className="Lorem_Inicio">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi a omnis totam maxime velit! Provident voluptate fugit nobis iste molestiae dolore consectetur, vel officiis inventore temporibus neque repudiandae, beatae totam?</p>
                    </div>
                </div>
                <div className="col-lg-6  col-md-6 col-sm-12">
                    <div className="Inicio_Columas">
                        hola
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Inicio;