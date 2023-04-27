import React from "react";
import '../styles/SildeVEmpresarial.css';
import Carousel from 'react-bootstrap/Carousel';


function SilerVEmpresarial() {
    return(
        <div className="containerS">
            <Carousel>
                <Carousel.Item>
                <div className="item">
                    <h1>Mision</h1>
                    <p>Contribuir en la recuperación de la madera y afines, aportando en la preservación del medio ambiente y los recursos naturales, realizando y ejecutando proyectos 
                    que surjan desde un pensamiento ecológico y sostenible, en beneficio de las personas y el entorno, de manera normativa, con calidad y ambiente de familia.</p>
                </div>    
                </Carousel.Item>
                <Carousel.Item>
                <div className="item">
                    <h1>Vision</h1>
                    <p>Ser una empresa sostenible en la recuperación y nuevo uso de la madera y afines, preocupada por conservar el ambiente, con desarrollo económico, construyendo 
                        una conciencia humanista y ambientalista, que reconozca la obra de Dios en el cuidado del planeta.</p>
                </div>
                </Carousel.Item>

                <Carousel.Item>
                <div className="item">
                    <h1>Principios y valores</h1>
                    <ul>
                        <li>Ambiente familiar</li>
                        <li>Servicio</li>
                        <li>Lealtad y transparencia</li>
                        <li>Cuidado del medio ambiente</li>
                    </ul>
                </div>
                </Carousel.Item>
            </Carousel>
        </div>

    );
}
export {SilerVEmpresarial};