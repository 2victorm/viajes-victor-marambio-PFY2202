import React from 'react';

// Mensaje que se muestra cuando una solicitud falla
function MensajeError({ mensaje }) {
  return (
    <p className="mensaje error" role="alert">
      Error: {mensaje}
    </p>
  );
}

export default MensajeError;
