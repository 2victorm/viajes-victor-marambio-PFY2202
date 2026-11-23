import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Destinos from './pages/Destinos';
import DetalleDestino from './pages/DetalleDestino';
import NoEncontrado from './pages/NoEncontrado';
import './App.css';

// Se usa HashRouter (en vez de BrowserRouter) para que las rutas
// funcionen también al recargar la página en GitHub Pages.
function App() {
  return (
    <Router>
      <Navbar />
      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/destinos/:id" element={<DetalleDestino />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>
      <footer className="pie">
        <p>© 2026 Rumbo Viajes · Todos los derechos reservados</p>
      </footer>
    </Router>
  );
}

export default App;
