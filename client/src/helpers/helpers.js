export function formatValue(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function formatDay(day) {
  if (day < 10) {
    return `0${day}`;
  }
  return day;
}

