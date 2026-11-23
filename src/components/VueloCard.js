import React from 'react';
import Disponibilidad from './Disponibilidad';
import { formatearPrecio, formatearFecha } from '../utils/formatos';

// Tarjeta de un vuelo
function VueloCard({ vuelo }) {
  return (
    <article className="tarjeta">
      <h4>{vuelo.aerolinea}</h4>
      <p>Origen: {vuelo.origen}</p>
      <p>Salida: {formatearFecha(vuelo.fechaSalida)}</p>
      <p>Regreso: {formatearFecha(vuelo.fechaRegreso)}</p>
      <p className="precio">{formatearPrecio(vuelo.precio)}</p>
      <Disponibilidad cantidad={vuelo.disponibilidad} unidad="asientos" />
    </article>
  );
}

export default VueloCard;
