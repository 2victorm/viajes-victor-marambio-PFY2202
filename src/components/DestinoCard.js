import React from 'react';
import { Link } from 'react-router-dom';
import './DestinoCard.css';

// Tarjeta de un destino (se usa en la lista de destinos).
// La imagen se llama igual que el id del destino. Ej: paris.jpg
function DestinoCard({ destino }) {
  return (
    <article className="tarjeta destino">
      <img
        className="destino-imagen"
        src={`${process.env.PUBLIC_URL}/imagenes/${destino.id}.jpg`}
        alt={`${destino.ciudad}, ${destino.pais}`}
      />
      <h3>{destino.ciudad}</h3>
      <p className="pais">{destino.pais}</p>
      <p>{destino.descripcion}</p>

      <h4>Actividades populares</h4>
      <ul className="actividades">
        {destino.actividades.map((actividad) => (
          <li key={actividad}>{actividad}</li>
        ))}
      </ul>

      <Link to={`/destinos/${destino.id}`} className="boton">
        Ver vuelos y hoteles
      </Link>
    </article>
  );
}

export default DestinoCard;