// Datos simulados que entrega el backend mock.
// Los destinos se exponen por REST y los vuelos/hoteles por GraphQL.

export const destinos = [
  {
    id: 'paris',
    ciudad: 'París',
    pais: 'Francia',
    descripcion: 'La ciudad de la luz: arte, gastronomía y arquitectura icónica.',
    actividades: ['Torre Eiffel', 'Museo del Louvre', 'Paseo en el Sena', 'Montmartre'],
  },
  {
    id: 'tokio',
    ciudad: 'Tokio',
    pais: 'Japón',
    descripcion: 'Tradición y tecnología conviven en una de las metrópolis más grandes del mundo.',
    actividades: ['Templo Senso-ji', 'Cruce de Shibuya', 'Mercado de Tsukiji', 'Monte Fuji'],
  },
  {
    id: 'cancun',
    ciudad: 'Cancún',
    pais: 'México',
    descripcion: 'Playas de arena blanca y aguas turquesa en el Caribe mexicano.',
    actividades: ['Chichén Itzá', 'Snorkel en Isla Mujeres', 'Cenotes', 'Playa Delfines'],
  },
  {
    id: 'roma',
    ciudad: 'Roma',
    pais: 'Italia',
    descripcion: 'Dos mil años de historia en cada esquina de la ciudad eterna.',
    actividades: ['Coliseo Romano', 'Fontana di Trevi', 'Ciudad del Vaticano', 'Foro Romano'],
  },
  {
    id: 'cusco',
    ciudad: 'Cusco',
    pais: 'Perú',
    descripcion: 'La antigua capital del imperio inca, puerta de entrada a Machu Picchu.',
    actividades: ['Machu Picchu', 'Valle Sagrado', 'Sacsayhuamán', 'Montaña de Colores'],
  },
  {
    id: 'nueva-york',
    ciudad: 'Nueva York',
    pais: 'Estados Unidos',
    descripcion: 'La ciudad que nunca duerme: teatros, museos y rascacielos.',
    actividades: ['Central Park', 'Estatua de la Libertad', 'Broadway', 'Times Square'],
  },
];

// Vuelos y hoteles por destino. Precios en pesos chilenos (CLP).
// "disponibilidad" es la cantidad de asientos (vuelos) o habitaciones (hoteles) que quedan.
export const vuelosPorDestino = {
  paris: [
    { id: 'v-par-1', aerolinea: 'LATAM', origen: 'Santiago (SCL)', fechaSalida: '2027-01-15', fechaRegreso: '2027-01-25', precio: 1250000, disponibilidad: 12 },
    { id: 'v-par-2', aerolinea: 'Air France', origen: 'Santiago (SCL)', fechaSalida: '2027-02-03', fechaRegreso: '2027-02-12', precio: 1380000, disponibilidad: 4 },
    { id: 'v-par-3', aerolinea: 'Iberia', origen: 'Santiago (SCL)', fechaSalida: '2027-03-10', fechaRegreso: '2027-03-20', precio: 1190000, disponibilidad: 0 },
  ],
  tokio: [
    { id: 'v-tok-1', aerolinea: 'Japan Airlines', origen: 'Santiago (SCL)', fechaSalida: '2027-02-10', fechaRegreso: '2027-02-24', precio: 1850000, disponibilidad: 7 },
    { id: 'v-tok-2', aerolinea: 'Qatar Airways', origen: 'Santiago (SCL)', fechaSalida: '2027-03-05', fechaRegreso: '2027-03-19', precio: 1720000, disponibilidad: 15 },
  ],
  cancun: [
    { id: 'v-can-1', aerolinea: 'Sky Airline', origen: 'Santiago (SCL)', fechaSalida: '2027-01-20', fechaRegreso: '2027-01-27', precio: 640000, disponibilidad: 22 },
    { id: 'v-can-2', aerolinea: 'LATAM', origen: 'Santiago (SCL)', fechaSalida: '2027-02-14', fechaRegreso: '2027-02-21', precio: 710000, disponibilidad: 9 },
    { id: 'v-can-3', aerolinea: 'Avianca', origen: 'Santiago (SCL)', fechaSalida: '2027-04-01', fechaRegreso: '2027-04-08', precio: 685000, disponibilidad: 2 },
  ],
  roma: [
    { id: 'v-rom-1', aerolinea: 'ITA Airways', origen: 'Santiago (SCL)', fechaSalida: '2027-04-12', fechaRegreso: '2027-04-22', precio: 1310000, disponibilidad: 10 },
    { id: 'v-rom-2', aerolinea: 'Iberia', origen: 'Santiago (SCL)', fechaSalida: '2027-05-03', fechaRegreso: '2027-05-13', precio: 1245000, disponibilidad: 6 },
  ],
  cusco: [
    { id: 'v-cus-1', aerolinea: 'Sky Airline', origen: 'Santiago (SCL)', fechaSalida: '2027-01-28', fechaRegreso: '2027-02-02', precio: 320000, disponibilidad: 18 },
    { id: 'v-cus-2', aerolinea: 'LATAM', origen: 'Santiago (SCL)', fechaSalida: '2027-03-18', fechaRegreso: '2027-03-23', precio: 355000, disponibilidad: 0 },
  ],
  'nueva-york': [
    { id: 'v-nyc-1', aerolinea: 'American Airlines', origen: 'Santiago (SCL)', fechaSalida: '2027-03-01', fechaRegreso: '2027-03-09', precio: 980000, disponibilidad: 14 },
    { id: 'v-nyc-2', aerolinea: 'LATAM', origen: 'Santiago (SCL)', fechaSalida: '2027-04-20', fechaRegreso: '2027-04-28', precio: 1040000, disponibilidad: 5 },
  ],
};

export const hotelesPorDestino = {
  paris: [
    { id: 'h-par-1', nombre: 'Hôtel Lumière', estrellas: 4, precioPorNoche: 145000, disponibilidad: 6 },
    { id: 'h-par-2', nombre: 'Le Petit Montmartre', estrellas: 3, precioPorNoche: 88000, disponibilidad: 3 },
    { id: 'h-par-3', nombre: 'Grand Palais Paris', estrellas: 5, precioPorNoche: 260000, disponibilidad: 0 },
  ],
  tokio: [
    { id: 'h-tok-1', nombre: 'Shinjuku Sky Hotel', estrellas: 4, precioPorNoche: 120000, disponibilidad: 8 },
    { id: 'h-tok-2', nombre: 'Asakusa Ryokan', estrellas: 3, precioPorNoche: 95000, disponibilidad: 2 },
  ],
  cancun: [
    { id: 'h-can-1', nombre: 'Playa Azul Resort', estrellas: 5, precioPorNoche: 180000, disponibilidad: 10 },
    { id: 'h-can-2', nombre: 'Casa Caribe', estrellas: 3, precioPorNoche: 70000, disponibilidad: 5 },
    { id: 'h-can-3', nombre: 'Hotel Zona Hotelera', estrellas: 4, precioPorNoche: 110000, disponibilidad: 1 },
  ],
  roma: [
    { id: 'h-rom-1', nombre: 'Domus Aurea Hotel', estrellas: 4, precioPorNoche: 130000, disponibilidad: 7 },
    { id: 'h-rom-2', nombre: 'Trastevere Inn', estrellas: 3, precioPorNoche: 82000, disponibilidad: 4 },
  ],
  cusco: [
    { id: 'h-cus-1', nombre: 'Casa Inca Boutique', estrellas: 4, precioPorNoche: 75000, disponibilidad: 9 },
    { id: 'h-cus-2', nombre: 'Hostal Plaza de Armas', estrellas: 2, precioPorNoche: 32000, disponibilidad: 12 },
  ],
  'nueva-york': [
    { id: 'h-nyc-1', nombre: 'Manhattan Central Hotel', estrellas: 4, precioPorNoche: 190000, disponibilidad: 5 },
    { id: 'h-nyc-2', nombre: 'Brooklyn Loft Stay', estrellas: 3, precioPorNoche: 115000, disponibilidad: 0 },
  ],
};
