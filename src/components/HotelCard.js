import React from 'react';
import Disponibilidad from './Disponibilidad';
import { formatearPrecio } from '../utils/formatos';

// Tarjeta de un hotel
function HotelCard({ hotel }) {
  return (
    <article className="tarjeta">
      <h4>{hotel.nombre}</h4>
      <p className="estrellas" aria-label={`${hotel.estrellas} estrellas`}>
        {'★'.repeat(hotel.estrellas)}
      </p>
      <p className="precio">{formatearPrecio(hotel.precioPorNoche)} por noche</p>
      <Disponibilidad cantidad={hotel.disponibilidad} unidad="habitaciones" />
    </article>
  );
}

export default HotelCard;
