import React from "react";
import '../styles/ReportePdf.css'
import Card from 'react-bootstrap/Card';

function ReportePdf(){
    return(
        <>
            <div className="containerS">
            <Card >
                <Card.Body>
                    <Card.Title>Reporte de Gestión BIC 2021</Card.Title>
                    <Card.Text>
                    Presentamos nuestro primer reporte de gestión, base para nuestra medición de avance en los próximos reportes.
                    </Card.Text>
                    <iframe 
                        className="reporte"
                        src={require("../Archivos/Reporte_de_Gestión_BIC_2021.pdf")}
                    >

                    </iframe>
                </Card.Body>
                </Card>
            </div>
        </>
    );
}

export {ReportePdf}