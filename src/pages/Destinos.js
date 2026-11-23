import React, { useState, useEffect } from 'react';
import DestinoCard from '../components/DestinoCard';
import Cargando from '../components/Cargando';
import MensajeError from '../components/MensajeError';

// Lista de destinos. Los datos vienen de la API REST mock (/api/destinos)
function Destinos() {
  const [destinos, setDestinos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    fetch('/api/destinos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudieron obtener los destinos');
        }
        return response.json();
      })
      .then((data) => {
        setDestinos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filtra los destinos por ciudad o país según lo que escribe el usuario
  const destinosFiltrados = destinos.filter((destino) => {
    const texto = busqueda.toLowerCase();
    return (
      destino.ciudad.toLowerCase().includes(texto) ||
      destino.pais.toLowerCase().includes(texto)
    );
  });

  if (loading) return <Cargando texto="Cargando destinos..." />;
  if (error) return <MensajeError mensaje={error} />;

  return (
    <div>
      <h2>Destinos disponibles</h2>

      <label htmlFor="busqueda" className="etiqueta">
        Buscar por ciudad o país
      </label>
      <input
        id="busqueda"
        type="text"
        className="buscador"
        placeholder="Ej: Japón"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {destinosFiltrados.length > 0 ? (
        <div className="grilla">
          {destinosFiltrados.map((destino) => (
            <DestinoCard key={destino.id} destino={destino} />
          ))}
        </div>
      ) : (
        <p className="mensaje">No hay destinos que coincidan con tu búsqueda.</p>
      )}
    </div>
  );
}

export default Destinos;
