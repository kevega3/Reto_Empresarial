import React from "react";
import '../styles/Menu.css';
import { Link } from "react-router-dom";
 



function Menu(props){
    return(
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-sm-top">
          <div className="container-fluid">
          
            <a className="navbar-brand" href="#"><img src={require(`../Img/IconoRS.png`) } width='80px'/> R. Savilla SAS BIC</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav">
                <ul className="menu">
                    <li className="nav-item">
                      <Link to='/'  className="nav-link  letra text-white textoICons" aria-current="page"  >
                      
                      <span>Inicio</span>
                        <span>
                        <i class="fa-solid fa-house iconos_Menu"></i>
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/Quehacemos' className="nav-link  letra text-white textoICons" aria-current="page"  >
                      
                      <span>Que Hacemos</span>
                        <span>
                        <i class="fas fa-address-card iconos_Menu" aria-hidden="true"></i>
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/Contactenos'  className="nav-link  letra text-white textoICons" aria-current="page"  >
                        <span>Contactenos</span>
                        <span>
                        <i class="fas fa-id-card-alt iconos_Menu"></i>
                        
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a  className="nav-link  letra text-white textoICons" aria-current="page"  >
                      <span>Login</span>
                        <span>
                        <i class="fa-solid fa-right-to-bracket iconos_Menu"></i>
                        </span>
                      </a>
                    </li>
                </ul>
              </ul>
            </div>
          </div>
        </nav>
    </>

    );
}

export default Menu;