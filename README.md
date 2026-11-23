# Rumbo Viajes – Agencia de viajes

Actividad sumativa Semana 5 – **Integrando nuestro frontend con backend**
Desarrollo Frontend II (PFY2202) – Víctor Marambio

Aplicación web en React para una agencia de viajes. El usuario puede ver los destinos disponibles, elegir uno y revisar los vuelos y hoteles que tiene, con sus precios, fechas y disponibilidad.

**Sitio publicado:** https://2victorm.github.io/viajes-victor-marambio-PFY2202

## Qué hace la aplicación

- **Inicio:** página de bienvenida con un botón para ver los destinos.
- **Destinos:** lista de destinos con el país y las actividades populares de cada uno. Tiene un buscador para filtrar por ciudad o país.
- **Detalle del destino:** al elegir un destino se muestra su información y las opciones de **vuelos** (aerolínea, origen, fechas, precio y asientos disponibles) y **hoteles** (estrellas, precio por noche y habitaciones disponibles). Si algo está agotado, se indica en rojo.
- Mientras se cargan los datos se muestra un mensaje de carga, y si ocurre un error se muestra un mensaje al usuario.
- El diseño es responsivo (computador, tablet y celular).

## Tecnologías

- React 18 (create-react-app)
- React Router 6 (`HashRouter`, `Routes`, `Route`, `Link`, `useParams`, `useLocation`)
- `useState` y `useEffect` para el manejo de estado y la carga de datos
- Apollo Client 3 para consultar la API GraphQL
- MSW (Mock Service Worker) para simular el backend (REST y GraphQL)
- HTML, JavaScript y CSS (sin frameworks de estilos)
- gh-pages para publicar el sitio

## Cómo se comunica el frontend con el backend mock

| Qué se obtiene | Tecnología | Dónde se usa |
|---|---|---|
| Lista de destinos | REST: `GET /api/destinos` | `pages/Destinos.js` (con `fetch` y `useEffect`) |
| Información de un destino | REST: `GET /api/destinos/:id` | `pages/DetalleDestino.js` (con `fetch` y `useEffect`) |
| Vuelos y hoteles de un destino | GraphQL: query `GetOpcionesViaje` | `pages/DetalleDestino.js` (con `useQuery` de Apollo) |

El backend mock está en la carpeta `src/mocks`:

- `data.js`: datos de destinos, vuelos y hoteles.
- `handlers.js`: define las respuestas REST y GraphQL (con un pequeño retraso simulado y respuestas de error si el destino no existe).
- `browser.js`: configura el Service Worker de MSW.

La consulta GraphQL está en `src/graphql/queries.js`:

```graphql
query GetOpcionesViaje($destinoId: ID!) {
  vuelos(destinoId: $destinoId) {
    id aerolinea origen fechaSalida fechaRegreso precio disponibilidad
  }
  hoteles(destinoId: $destinoId) {
    id nombre estrellas precioPorNoche disponibilidad
  }
}
```

> El mock se activa siempre (no solo en desarrollo) porque el sitio publicado en GitHub Pages tampoco tiene un backend real.

## Rutas

| Ruta | Pantalla |
|---|---|
| `/` | Inicio |
| `/destinos` | Lista de destinos |
| `/destinos/:id` | Detalle de un destino (vuelos y hoteles) |
| cualquier otra | Página no encontrada |

Se usa `HashRouter`, por eso las URLs llevan `#` (por ejemplo `/#/destinos/paris`). Así las rutas funcionan también al recargar la página en GitHub Pages.

## Estructura del proyecto

```
src/
├── App.js                 # Router y rutas
├── index.js               # Activa el mock y configura Apollo
├── components/            # Piezas reutilizables
│   ├── Navbar.js
│   ├── DestinoCard.js
│   ├── VueloCard.js
│   ├── HotelCard.js
│   ├── Disponibilidad.js
│   ├── Cargando.js
│   └── MensajeError.js
├── pages/                 # Una pantalla por ruta
│   ├── Inicio.js
│   ├── Destinos.js
│   ├── DetalleDestino.js
│   └── NoEncontrado.js
├── graphql/queries.js     # Consulta GraphQL
├── mocks/                 # Backend mock (MSW)
│   ├── data.js
│   ├── handlers.js
│   └── browser.js
└── utils/formatos.js      # Formato de precios y fechas
```

## Cómo ejecutarlo en el computador

Requiere Node.js.

```bash
git clone https://github.com/2victorm/viajes-victor-marambio-PFY2202.git
cd viajes-victor-marambio-PFY2202
npm install
npm start
```

Se abre en http://localhost:3000.

## Publicación en GitHub Pages

```bash
npm run deploy
```

Este comando compila el proyecto y sube la carpeta `build` a la rama `gh-pages`.

## Pruebas en distintos navegadores

Se probó que cada navegador cargue la lista de destinos, el detalle con vuelos y hoteles, la navegación entre pantallas, la recarga de una ruta y la vista en celular.

| Navegador | Resultado |
|---|---|
| Google Chrome | Funciona correctamente |
| Mozilla Firefox | Funciona correctamente |
| Microsoft Edge | Funciona correctamente |
