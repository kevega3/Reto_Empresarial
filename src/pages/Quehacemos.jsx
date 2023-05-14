import React, { Fragment } from "react";
import Separador from '../Componentes/Separador.jsx';
import { Recuperados } from "../Componentes/Recuperados.jsx";
import  Enfoque  from '../Componentes/Enfoque.jsx';


function Quehacemos(){
    return(
        <Fragment>
            <Separador titulo = 'Materiales Recuperados'/>
            <Recuperados/>
            <Separador titulo = '¿A que nos dedicamos?'/>
            <Enfoque/>
        </Fragment>
    );
}

export {Quehacemos}