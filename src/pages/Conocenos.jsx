import React, { Fragment } from "react";
import { Politicas } from '../Componentes/Politicas.jsx';
import  SilerVEmpresarial  from '../Componentes/SlideVEmpresarial.jsx';
import Separador from '../Componentes/Separador.jsx';
import Inicio from '../Componentes/Inicio.jsx';
import { Somos } from "../Componentes/Somos.jsx";
import { ReportePdf } from "../Componentes/ReportePdf.jsx";


function Conocenos(){
    return(
    <Fragment>
      <Inicio
        titulo ={<div dangerouslySetInnerHTML={{__html: '<strong>R. Savilla SAS BIC</strong>'}} />}
        descripcion ={<div dangerouslySetInnerHTML={{__html: '<strong>R Savilla SAS</strong>  es una sociedad por acciones simplificadas matriculada el martes <strong> 15 de marzo de 2016 </strong> en la cámara de comercio de Bogotá. Esta empresa se dedica principalmente a <strong>comercio al por mayor de desperdicios, desechos y chatarra.</strong> <br></br>   Fabricamos diferentes tipos de muebles para el hogar, entre ellos: base camas, sofás, comedores, armarios y otros. A través de la reincorporación de madera proveniente de estibas, desarrollando procesos de economía circular como nuestro proceso de valor.'}}  />}
        img = 'https://img.freepik.com/foto-gratis/logo-reciclaje-eco-verde-sobre-fondo-madera_23-2148115647.jpg?w=740&t=st=1682476467~exp=1682477067~hmac=0751b2ed29b657985c45c4ece451959c39ec9173e9f8f695e361f824800eeba1'
        />
        <Separador
        titulo = 'Estrategia corporativa'
        />
        <SilerVEmpresarial/>
      <Separador
        titulo = 'Nuestra Politica ambiental'
        />
      <Politicas/>
      <Separador
        titulo = 'Quienes Somos'
        />
      <Somos/>
      <ReportePdf/>
    </Fragment>
    );
}


export {Conocenos}