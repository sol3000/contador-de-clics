import './App.css';
import sol3000 from './imagenes/sol3000.png';
import Boton from './componentes/Boton';
import Contadores from './componentes/MiContador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }; 

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='app'>
     <div className='sol3000-logo-contenedor'>
      <img
        className='sol3000-logo'
        src={sol3000}
        alt='Logo de sol3000' />
     </div>
     <div className='contenedor-principal'>
      <Contadores numClics={numClics} />
      
      
      <Boton
        texto='Clic'
        botonClic={true}
        manejarClic={manejarClic} />

      <Boton 
        texto='Reiniciar' 
        botonClic={false}
        manejarClic={reiniciarContador} />
     </div>
    </div>
  );
}

export default App;
