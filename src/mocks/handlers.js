import { graphql, http, HttpResponse, delay } from 'msw';
import { destinos, vuelosPorDestino, hotelesPorDestino } from './data';

export const handlers = [
  // ---------- REST ----------
  // Lista de destinos disponibles
  http.get('/api/destinos', async () => {
    await delay(800);
    return HttpResponse.json(destinos);
  }),

  // Información de un destino por id
  http.get('/api/destinos/:id', async ({ params }) => {
    await delay(500);
    const destino = destinos.find((d) => d.id === params.id);

    if (!destino) {
      return HttpResponse.json(
        { mensaje: `No existe el destino "${params.id}"` },
        { status: 404 }
      );
    }

    return HttpResponse.json(destino);
  }),

  // ---------- GraphQL ----------
  // Vuelos y hoteles disponibles de un destino, en una sola consulta
  graphql.query('GetOpcionesViaje', async ({ variables }) => {
    const { destinoId } = variables;
    await delay(1000);

    const vuelos = vuelosPorDestino[destinoId];
    const hoteles = hotelesPorDestino[destinoId];

    if (!vuelos || !hoteles) {
      return HttpResponse.json({
        errors: [{ message: `No se encontraron opciones de viaje para el destino "${destinoId}"` }],
      });
    }

    return HttpResponse.json({
      data: { vuelos, hoteles },
    });
  }),
];
