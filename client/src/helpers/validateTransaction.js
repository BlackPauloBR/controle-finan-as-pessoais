function date(currentDate) {
  let year = currentDate.substring(0, 4);
  year = parseInt(year, 10);
  let month = currentDate.substring(5, 7);
  month = parseInt(month, 10);
  let day = currentDate.substring(8, 10);
  day = parseInt(day, 10);

  if (day >= 1 && day <= 31) {
    if (month >= 1 && month <= 12) {
      if (year >= 2019 && year <= 2021) {
        if (day < 10) day = `0${day}`;
        if (month < 10) month = `0${month}`;
        return {
          year,
          month,
          day,
          yearMonth: `${year}-${month}`,
          yearMonthDay: `${year}-${month}-${day}`,
        };
      }
    }
  }
}

function disabled({ description, category, value, date }) {
  if (description === false) {
    if (category === false) {
      if (value === false) {
        if (date === false) {
          return false; //retornar false habilita o button save, pois disabled={false}
        }
      }
    }
  }
  return true; //retornar true desabilita o button save, pois disabled={true}
}

function editTransaction(newTransaction, currentTheInfo) {
  const newEditTransaction = { ...currentTheInfo };
  const {
    description,
    value,
    category,
    year,
    month,
    day,
    yearMonth,
    yearMonthDay,
  } = newTransaction;

  if (description !== null) newEditTransaction.description = description;
  if (value !== null) newEditTransaction.value = value;
  if (category !== null) newEditTransaction.category = category;
  if (year !== null) newEditTransaction.year = year;
  if (month !== null) newEditTransaction.month = month;
  if (day !== null) newEditTransaction.day = day;
  if (yearMonth !== null) newEditTransaction.yearMonth = yearMonth;
  if (yearMonthDay !== null) newEditTransaction.yearMonthDay = yearMonthDay;
  //Type é ignorado, pois essa função é especifica do Edit, onde é bloqueado o acesso ao type.
  return newEditTransaction;
}

export default { date, disabled, editTransaction };
