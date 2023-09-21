import React from 'react';
import '../hojas-de-estilo/MiContador.css';


function Contadores({ numClics }) {
    return (
        <div className='contador'>
          {numClics}
        </div>
    );
}

export default Contadores;