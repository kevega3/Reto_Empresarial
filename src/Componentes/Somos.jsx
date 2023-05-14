import React from "react";
import '../styles/Somos.css';
import imgSomosBic from  '../Img/somosBic.png'


function Somos(props) {
    return(
        <>
            <div className="containerS">
                <div className="row">
                    <div className="col-lg-6 imgSomos">
                    <img
                        className="d-block w-100"
                        src={imgSomosBic}
                        alt="Economia Circular"
                        />
                    </div>
                    <div className="col-lg-6 contenidoBic">
                        <h2>Somos una sociedad BIC</h2>
                        <p>
                            Desde 2021, somos una empresa que incorpora un propósito social y ambiental que va más allá del beneficio e interés para sus accionistas.<br/>
                            Las Sociedades BIC combinan simultáneamente las ventajas económicas de la actividad mercantil, con la posibilidad de contribuir al medio ambiente, al bienestar de los trabajadores y al interés de la colectividad.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
    
}

export {Somos}