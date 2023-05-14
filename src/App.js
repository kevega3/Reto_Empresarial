
import './App.css';
import './styles/Boostrap.css';
import Inicio from './Componentes/Inicio.jsx';
import Menu from './Componentes/Menu.jsx';
import  SilerVEmpresarial  from './Componentes/SlideVEmpresarial';
import  Enfoque  from './Componentes/Enfoque';
import Separador from './Componentes/Separador';
import Fooder from './Componentes/Fooder';
import  BtnWhatsapp  from './Componentes/BtnWhatsapp';
import { Politicas } from './Componentes/Politicas';
import  Header  from './Componentes/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Conocenos } from './pages/Conocenos';
import { Quehacemos } from './pages/Quehacemos';
import { Contactenos } from './pages/Contactenos';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App"> 
      <Header/>
      <Menu img = '../Img/IconoRS.png'/>
      <Routes>
        <Route>
          <Route index element={<Conocenos />} />
          <Route path="Quehacemos" element={<Quehacemos />} />
          <Route path="Contactenos" element={<Contactenos />} />
        </Route>
      </Routes>
      

      
      
      
      <BtnWhatsapp/> 
      <Fooder/>
    </div>
    </BrowserRouter>
  );
}

export default App;
