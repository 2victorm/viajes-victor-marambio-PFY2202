import React from 'react';

// Muestra cuántos asientos o habitaciones quedan.
// Si no queda ninguno, muestra "Agotado".
function Disponibilidad({ cantidad, unidad }) {
  if (cantidad === 0) {
    return <span className="disponibilidad agotado">Agotado</span>;
  }

  return (
    <span className="disponibilidad">
      {cantidad} {unidad} disponibles
    </span>
  );
}

export default Disponibilidad;
