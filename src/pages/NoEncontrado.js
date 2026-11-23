import React from 'react';
import { Link } from 'react-router-dom';

// Se muestra cuando la ruta no existe
function NoEncontrado() {
  return (
    <div>
      <h2>Página no encontrada</h2>
      <p>La dirección que buscas no existe.</p>
      <Link to="/" className="boton">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NoEncontrado;
