// Muestra un número como precio en pesos chilenos. Ej: 1250000 -> $1.250.000
export function formatearPrecio(valor) {
  return valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
}

// Cambia una fecha "2027-01-15" a "15-01-2027"
export function formatearFecha(texto) {
  const partes = texto.split('-');
  return `${partes[2]}-${partes[1]}-${partes[0]}`;
}
