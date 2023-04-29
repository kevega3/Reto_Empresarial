import React from "react";
import {FloatingWhatsApp} from 'react-floating-whatsapp';
import Logo from '../Img/LogAmp2.png'


function BtnWhatsapp(params) {
    return(
        <FloatingWhatsApp
            phoneNumber="573508382041"
            accountName="Sevilla SAS"
            darkMode="true"
            chatMessage="Hola, estas interesado en nuestros servicios"
            avatar={Logo}
            placeholder="Escribenos..."
        />
    )
}

export default BtnWhatsapp;