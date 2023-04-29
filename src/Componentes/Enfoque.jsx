import React from "react";
import '../styles/Enfoque.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import imgBasecama from './../Img/Basecama.jpg' 
import imgCabecero from './../Img/Cabeceros.jpg' 
import imgComedores from './../Img/Comedores.jpg' 
import imgSalas from './../Img/Salas.jpg' 


function Enfoque(props) {
    return(
        <section id='#enfoque'>
        <div className="containerS">

            <div className="row">
                <div className="col-lg-12 ">
                </div>
                <div className="col-lg-6 contCard">
                <Card >
                    <Card.Body>
                        <Card.Title>Eco-productos:</Card.Title>
                        <Card.Text>
                            Fabricamos diferentes tipos de muebles para el hogar, entre ellos: base camas, sofás, comedores, 
                            armarios y otros. A través de la reincorporación de madera proveniente de estibas, desarrollando procesos de 
                            economía circular como nuestro proceso de valor.
                        </Card.Text>
                        <Card.Link target="blank" href="https://muebles.gdc.coop/ads/fabricademueblesrsavilla/">Interesado en nuestros Productos</Card.Link>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-6 producto">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={imgBasecama}
                        alt="Basecama"
                        />
                        <Carousel.Caption>
                        <h3>Basecama</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={imgCabecero}
                        alt="Cabeceros"
                        />

                        <Carousel.Caption>
                        <h3>Cabeceros</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={imgComedores}
                        alt="Comedores"
                        />

                        <Carousel.Caption>
                        <h3>Comedores</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={imgSalas}
                        alt="Salas"
                        />
                        <Carousel.Caption>
                        <h3>Salas</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Enfoque;