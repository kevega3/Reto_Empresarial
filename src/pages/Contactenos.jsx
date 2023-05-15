import React, { Fragment } from "react";



function Contactenos(){
  
    return(
    <Fragment>
      

    <div class="container-fluid">
        <div class="row">
            <div class="d-none d-md-block col-md-1 col-lg-1 bloque2-azul">
                <div class="bloque2-azul"></div>
            </div>

            <div class="col-sm-12 col-md-12 col-lg-10 contenedorContacto">
                     <div class="row">
                        
                        <div class="col-md-6 col-lg-6 contenedorIconos">  
                             <div class="iconoContacto">
                                    <div class="IconoSimbolo">
                                        <i class="fas fa-envelope iconoCont "></i>
                                    </div>

                                    <div class="TextoContacto">
                                        <h2 class="">Email</h2>
                                        <p>savilla.ambiental@gmail.com</p>   
                                    </div>

                                 {/* <!--Final iconoContacto--> */}
                             </div>
                             <div class="iconoContacto">
                                 <div class="IconoSimbolo">
                                        <i class="fas fa-phone iconoCont"></i>
                                 </div>

                                 <div class="TextoContacto">
                                        <h2 class="">Celular</h2>
                                        <p>+52 350 838 20 43</p>   
                                </div>
                                 
                             </div>
                             <div class="iconoContacto">

                                <div class="IconoSimbolo">
                                        <i class="fas fa-map-marker-alt iconoCont"></i>
                                 </div>

                                 <div class="TextoContacto">
                                        <h2 class="">Dirección</h2>
                                        <p>Cra 86B # 42-06 Sur, Bogotá DC.</p>   
                                </div>
                                 
                             </div>

                        </div>

                        <div class="col-md-6 col-lg-6 contenedorContactos">
                        <div className="contenedorFormulario">
	<main>
		<htmlFor action="https://formspree.io/f/xnqwjoja"
  method="POST" className="formulario" id="formulario">
			

			{/* <!-- Grupo: Nombre --> */}
			<div className="formulario__grupo" id="grupo__nombre">
				<label for="nombre" className="formulario__label">Nombre</label>
				<div className="formulario__grupo-input">
					<input type="text" className="formulario__input" name="nombre" id="nombre" placeholder="Nombre" />
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
			</div>
			{/* <!-- Grupo: Correo Electronico --> */}
			<div className="formulario__grupo" id="grupo___replyto">
				<label for="_replyto" className="formulario__label">Correo Electrónico</label>
				<div className="formulario__grupo-input">
					<input type="email" className="formulario__input" name="_replyto" id="_replyto" placeholder="correo@correo.com"/>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
			</div>

			{/* <!-- Grupo: Teléfono --> */}
			<div className="formulario__grupo" id="grclassNameupo__telefono">
				<label for="telefono" className="formulario__label">Teléfono</label>
				<div className="formulario__grupo-input">
					<input type="text" className="formulario__input" name="telefono" id="telefono" placeholder="Numero Tel"/>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El telefono solo puede contener numeros y el maximo son 14 dígitos.</p>
			</div>

			{/* <!-- Grupo: Asunto --> */}
			<div className="formulario__grupo" id="grupo__telefono">
				<label for="telefono" className="formulario__label">Asunto</label>
				<div className="formulario__grupo-input">
					<textarea type="text" className="formulario__input" name="Asunto" id="Asuto" placeholder=""></textarea>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El telefono solo puede contener numeros y el maximo son 14 dígitos.</p>
			</div>
			

			<div className="formulario__mensaje" id="formulario__mensaje">
				<p><i className="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
			</div>

			<div className="formulario__grupo formulario__grupo-btn-enviar">
				<button type="submit" className="formulario__btn" i>Enviar</button>
			</div> 
			 
		</htmlFor>
	</main>
</div>
                        </div>                       
                     </div>   
                     
            </div>

            <div class="d-none d-md-block col-md-1 col-lg-1 bloque2-azul">
                <div class="bloque2-azul"></div>
            </div>
        
   
        {/* <!--Final row--> */}
        </div>
    {/* <!--Fin contenedor--> */}
    </div>

{/* <head>
	<link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"> 
</head> */}
{/* <body> */}
	
	
	
{/* </body> */}
    </Fragment>
    );
}

export {Contactenos}
