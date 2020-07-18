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

export function backYearMonth(currentYearMonth) {
  if (currentYearMonth === '2019-01') return currentYearMonth;

  let year = currentYearMonth.substring(0, 4);
  year = parseInt(year, 10);
  let month = currentYearMonth.substring(5, 7);
  month = parseInt(month, 10);

  if (month === 1) {
    month = 12;
    year--;
  } else {
    month--;
    if (month < 10) month = `0${month}`;
  }

  return `${year}-${month}`;
}

export function nextYearMonth(currentYearMonth) {
  if (currentYearMonth === '2021-12') return currentYearMonth;

  let year = currentYearMonth.substring(0, 4);
  year = parseInt(year, 10);
  let month = currentYearMonth.substring(5, 7);
  month = parseInt(month, 10);

  if (month === 12) {
    month = 1;
    year++;
  } else {
    month++;
  }
  if (month < 10) month = `0${month}`;

  return `${year}-${month}`;
}
