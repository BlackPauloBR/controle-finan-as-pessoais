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

export function calcBarStatus(theList) {
  let barStatus = {
    lengthTransaction: null,
    totalReceitas: null,
    totalDespesas: null,
    saldo: null,
  };

  barStatus.lengthTransaction = theList.length;
  barStatus.totalReceitas = theList.transactions.reduce((acc, prop) => {
    if (prop.type === '+') acc = acc + prop.value;
    return acc;
  }, 0);
  barStatus.totalDespesas = theList.transactions.reduce((acc, prop) => {
    if (prop.type === '-') acc = acc + prop.value;
    return acc;
  }, 0);

  barStatus.saldo = barStatus.totalReceitas - barStatus.totalDespesas;

  return barStatus;
}

export function filterList(theList, value) {
  const textInput = value.toLowerCase();
  let newSearchList = { length: null, transactions: [] };
  theList.transactions.forEach((prop) => {
    if (!!prop.description.toLowerCase().match(textInput)) {
      newSearchList.transactions.push(prop);
      newSearchList.length = newSearchList.transactions.length;
    }
  });
  return newSearchList;
}
