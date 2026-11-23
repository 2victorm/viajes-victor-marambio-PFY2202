import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App';

// Activa el backend mock (MSW).
// Se activa siempre (no solo en desarrollo) porque el sitio publicado en
// GitHub Pages tampoco tiene un backend real.
async function enableMocking() {
  const { worker } = await import('./mocks/browser');
  return worker.start({
    // PUBLIC_URL es necesario para encontrar el archivo en GitHub Pages
    serviceWorker: { url: `${process.env.PUBLIC_URL}/mockServiceWorker.js` },
    // Las demás solicitudes (archivos de la app) pasan sin avisos en consola
    onUnhandledRequest: 'bypass',
  });
}

// Cliente de Apollo para consultar la API GraphQL mock
const client = new ApolloClient({
  uri: '/graphql', // Endpoint de GraphQL
  cache: new InMemoryCache(),
});

enableMocking().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  );
});
