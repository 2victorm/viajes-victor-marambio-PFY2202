import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';

// Destinos que se muestran en la página de inicio.
// Las imágenes están en la carpeta public/imagenes
const destacados = [
  { id: 'paris', nombre: 'París', pais: 'Francia', imagen: 'paris.jpg' },
  { id: 'tokio', nombre: 'Tokio', pais: 'Japón', imagen: 'tokio.jpg' },
  { id: 'cancun', nombre: 'Cancún', pais: 'México', imagen: 'cancun.jpg' },
  { id: 'roma', nombre: 'Roma', pais: 'Italia', imagen: 'roma.jpg' },
];

function Inicio() {
  // PUBLIC_URL permite encontrar las imágenes también en GitHub Pages
  const carpeta = `${process.env.PUBLIC_URL}/imagenes`;

  return (
    <div>
      <section className="hero">
        <img
          className="hero-imagen"
          src={`${carpeta}/portada.jpg`}
          alt="Paisaje de viaje"
        />
        <div className="hero-texto">
          <h1>Planifica tu próximo viaje</h1>
          <p>
            Explora destinos de todo el mundo y revisa los vuelos y hoteles
            disponibles, con sus precios y fechas, en un solo lugar.
          </p>
          <Link to="/destinos" className="boton">
            Ver destinos
          </Link>
        </div>
      </section>

      <section>
        <h2>Destinos populares</h2>
        <div className="grilla">
          {destacados.map((destino) => (
            <Link
              key={destino.id}
              to={`/destinos/${destino.id}`}
              className="destacado"
            >
              <img
                src={`${carpeta}/${destino.imagen}`}
                alt={`${destino.nombre}, ${destino.pais}`}
              />
              <div className="destacado-info">
                <h3>{destino.nombre}</h3>
                <p>{destino.pais}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Inicio;