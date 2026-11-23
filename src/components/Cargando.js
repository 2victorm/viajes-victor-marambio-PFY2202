import React from 'react';

// Mensaje que se muestra mientras llegan los datos
function Cargando({ texto }) {
  return (
    <p className="mensaje cargando" role="status">
      {texto}
    </p>
  );
}

export default Cargando;
