import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  // useLocation nos dice en qué ruta estamos para marcar el enlace activo
  const location = useLocation();

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        ✈ Rumbo Viajes
      </Link>
      <nav className="navbar-links">
        <Link to="/" className={location.pathname === '/' ? 'activo' : ''}>
          Inicio
        </Link>
        <Link
          to="/destinos"
          className={location.pathname.startsWith('/destinos') ? 'activo' : ''}
        >
          Destinos
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
