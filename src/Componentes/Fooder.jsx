import React from "react";
import '../styles/Fooder.css' ;
//import 'https://kit.fontawesome.com/62cb762d5c.js';




function Fooder(){
    return(
        <div className="Contenedor_Fooder">
            <div className="row">
                <div className="col-5  col-sm-5 col-md-3 col-lg-3 centrar">
                    <h4 className="Titulo_Fooder">R. Savilla SAS BIC</h4>
                    <br />
                    <div className="Contenedor_Iconos">
                        <div className="Botones_Redes_Sociales ">
                            
                        <i class="fa-brands fa-facebook iconfodder"></i>
                        </div>
                        <div className="Botones_Redes_Sociales">
                        <i class="fa-brands fa-youtube iconfodder"></i>
                        </div>
                        <div className="Botones_Redes_Sociales">
                        <i class="fa-brands fa-twitter iconfodder"></i>
                        </div>
                        <div className="Botones_Redes_Sociales iconfodder">
                        <i class="fa-brands fa-whatsapp iconfodder"></i>
                        </div>
                    </div>
                    <br />
                    <div className="Contenedor_boton">
                        <button className="Boton_TrabajeConNosotros">Trabaje con nosotros</button>
                    </div>

                    
                </div>
                <div className="col-6  col-sm-6 col-md-4 col-lg-4 centrar">
                    <div className="Contenedor_Titulos_Fooder">
                        <h4 className="Titulo_Fooder">Información de Contacto</h4>
                    </div>
                    <div className="Contenedor_Tabla_Fooder" >
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="td_foder"><i class="fa-solid fa-phone"></i></td>
                                        <td className="td_foder">3508382043</td>
                                        
                                    </tr>
                                    <tr>
                                        <td className="td_foder"><i class="fa-solid fa-phone-volume"></i></td>
                                            <td className="td_foder">Comunicador: 3508382041</td>
                                    </tr>
                                    <tr>
                                    <td className="td_foder"><i class="fa-solid fa-location-pin"></i></td>
                                            <td className="td_foder">Cra 86B # 42-06 Sur, Bogotá DC.</td>
                                    </tr>
                                    <tr>
                                    <td className="td_foder"><i class="fa-solid fa-envelope"></i></td>
                                    <td className="td_foder">savilla.ambiental@gmail.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
                <div className="col-12  col-sm-12 col-md-5 col-lg-5 centrar">
                    
                <div className="Contenedor_Logos_Fooder">
                    <img className="Imagen_Fooder"  src={require(`../Img/certificacion.png`) } width='200px'  alt="" />
                    <img  className="Imagen_Fooder" src={require(`../Img/negociosVerdes.png`) } width='200px'  alt="" />
                    <img  className="Imagen_Fooder" src={require(`../Img/IconoRS.png`) } width='200px'  alt="" />
                </div>
                </div>
                

            </div>
        </div>
    );
}

export default Fooder;



