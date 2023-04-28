import React from "react";
import '../styles/Politicas.css';
import ReactPlayer from "react-player";
import Carousel from 'react-bootstrap/Carousel';
import imgEco from '../Img/economiaCircular.PNG';

function Politicas(props) {
    return(
        <div className="containerS">
            <div className="row">
                <div className="col-lg-6 player">
                    <ReactPlayer
                        url='https://youtu.be/5M-DtIU4zgY'
                    />
                </div>
                <div className="col-lg-6">
                <Carousel>
                    <Carousel.Item>
                    <div className="item">
                        <div className="row">
                        <div className="col-lg-6 imagen">
                        <img
                        className="d-block w-100"
                        src={imgEco}
                        alt="Economia Circular"
                        />
                        </div>
                        <div className="col-lg-6">
                        <p>La empresa establece un marco común para la definición de programas, definición de objetivos y realización de actividades, que contribuyan con el sistema de gestión ambiental, 
                            que lleven a la organización a la mejora continua. Para cumplir estos compromisos R. Savilla ha establecido los siguientes objetivos y principios</p>
                        </div> 
                        </div>
                    </div>    
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="item">
                        <h1>Objetivo General</h1>
                        <p>Promover el manejo de residuos por medio de reciclaje y separación adecuada, obteniendo alternativas eficientes de aprovechamiento, que incorporen estos 
                            materiales nuevamente a la cadena de valor de distintos productos, gestionando materiales a través de una economía circular, procurando el ahorro de agua y energía</p>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className="item principios">
                        <h1>Objetivos y principios</h1>
                        <ul>
                            <li>Garantizar el cumplimiento de la Legislación ambiental aplicable, así como los compromisos adquiridos por la empresa en términos ambientales.</li>
                            <li>Prevenir, reducir y mitigar los impactos ambientales significativos de la empresa, apoyando iniciativas dirigidas a contrarrestar el cambio climático.</li>
                            <li>Contribuir a la sensibilización ambiental en los empleados, proveedores y clientes, fomentando la protección y el cuidado de nuestro entorno natural.</li>
                            <li>Fortalecer el uso eficiente y ahorro de agua en la empresa R. Savilla S.A.S, eliminando consumos excesivos y desperdicios, estableciendo programas que procuren la reducción en los indicadores del 5% anual de los metros cúbicos.</li>
                            <li>Fortalecer el uso eficiente y ahorro de energía en la empresa R. Savilla S.A.S, eliminando desperdicios y mal uso, estableciendo programas que procuren la reducción en los indicadores del 5% anual de los kilovatios/hora.</li>
                        </ul>
                    </div>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
        </div>
    );

}

export {Politicas}

