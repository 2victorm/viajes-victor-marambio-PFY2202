import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_OPCIONES_VIAJE } from '../graphql/queries';
import VueloCard from '../components/VueloCard';
import HotelCard from '../components/HotelCard';
import Cargando from '../components/Cargando';
import MensajeError from '../components/MensajeError';

// Detalle de un destino:
// - La información del destino viene por REST (/api/destinos/:id)
// - Los vuelos y hoteles vienen por GraphQL (query GetOpcionesViaje)
function DetalleDestino() {
  const { id } = useParams();

  // ----- REST: información del destino -----
  const [destino, setDestino] = useState(null);
  const [loadingDestino, setLoadingDestino] = useState(true);
  const [errorDestino, setErrorDestino] = useState(null);

  useEffect(() => {
    setLoadingDestino(true);
    setErrorDestino(null);

    fetch(`/api/destinos/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se encontró el destino');
        }
        return response.json();
      })
      .then((data) => {
        setDestino(data);
        setLoadingDestino(false);
      })
      .catch((err) => {
        setErrorDestino(err.message);
        setLoadingDestino(false);
      });
  }, [id]);

  // ----- GraphQL: vuelos y hoteles -----
  const { loading, error, data } = useQuery(GET_OPCIONES_VIAJE, {
    variables: { destinoId: id },
  });

  if (loadingDestino) return <Cargando texto="Cargando destino..." />;

  if (errorDestino) {
    return (
      <div>
        <MensajeError mensaje={errorDestino} />
        <Link to="/destinos" className="boton">
          Volver a destinos
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/destinos" className="volver">
        ← Volver a destinos
      </Link>

      <h2>
        {destino.ciudad}, {destino.pais}
      </h2>
      <p>{destino.descripcion}</p>

      <h3>Actividades populares</h3>
      <ul className="actividades">
        {destino.actividades.map((actividad) => (
          <li key={actividad}>{actividad}</li>
        ))}
      </ul>

      {loading && <Cargando texto="Cargando vuelos y hoteles..." />}
      {error && <MensajeError mensaje={error.message} />}

      {data && (
        <div>
          <h3>Vuelos disponibles</h3>
          {data.vuelos.length > 0 ? (
            <div className="grilla">
              {data.vuelos.map((vuelo) => (
                <VueloCard key={vuelo.id} vuelo={vuelo} />
              ))}
            </div>
          ) : (
            <p className="mensaje">No hay vuelos disponibles para este destino.</p>
          )}

          <h3>Hoteles disponibles</h3>
          {data.hoteles.length > 0 ? (
            <div className="grilla">
              {data.hoteles.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          ) : (
            <p className="mensaje">No hay hoteles disponibles para este destino.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default DetalleDestino;
