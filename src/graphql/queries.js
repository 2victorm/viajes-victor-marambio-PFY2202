import { gql } from '@apollo/client';

// Consulta los vuelos y hoteles disponibles de un destino.
// Pedimos solo los campos que vamos a mostrar en pantalla.
export const GET_OPCIONES_VIAJE = gql`
  query GetOpcionesViaje($destinoId: ID!) {
    vuelos(destinoId: $destinoId) {
      id
      aerolinea
      origen
      fechaSalida
      fechaRegreso
      precio
      disponibilidad
    }
    hoteles(destinoId: $destinoId) {
      id
      nombre
      estrellas
      precioPorNoche
      disponibilidad
    }
  }
`;
