import React from "react";
import {FloatingWhatsApp} from 'react-floating-whatsapp';


function BtnWhatsapp(params) {
    return(
        <FloatingWhatsApp
            phoneNumber="573003387000"
            accountName="Sevilla SAS"
            darkMode="true"
            chatMessage="Hola, estas interesado en nuestros servicios"
            
        />
    )
}

export default BtnWhatsapp;