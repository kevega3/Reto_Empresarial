import '../styles/Recuperados.css'
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import imgMadera from '../Img/madera.jpg';
import imgPlastico from '../Img/plastico.jpg';
import imgCarton from '../Img/carton.jpg';
import imgPapel from '../Img/papel.jpg';
import imgMetal from '../Img/metal.jpg';



function Recuperados(props) {

    return(
        <>
           <div className="containerR">
           <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={imgMadera}
                        alt="Madera"
                        />

                        <Carousel.Caption>
                        <h3>Madera</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={imgPlastico}
                        alt="Plastico"
                        />

                        <Carousel.Caption>
                        <h3>Plastico</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={imgCarton}
                        alt="Carton"
                        />

                        <Carousel.Caption>
                        <h3>Carton</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={imgPapel}
                        alt="Papel"
                        />

                        <Carousel.Caption>
                        <h3>Papel</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src={imgMetal}
                        alt="Metal"
                        />

                        <Carousel.Caption>
                        <h3>Material Metalico</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
           </div> 
        </>
    );
    
}
export {Recuperados}