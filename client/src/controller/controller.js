import http from '../http-common.js';

async function getYearMonth(yearMonth) {
  try {
    return await http.get(`/${yearMonth}`);
  } catch (err) {
    console.log(`Erro ao solicitar get yearMonth: ${yearMonth} , message: `);
    console.log(err);
  }
}

async function deleteTransaction({ _id }) {
  try {
    return await http.delete(`/${_id}`);
  } catch (err) {
    console.log(`Erro ao deletar transação _id: ${_id}, message: `);
    console.log(err);
  }
}

async function createTransactions(transaction) {
  try {
    return await http.post(`/`, transaction);
  } catch (err) {
    console.log(
      `Erro ao criar transação: ${JSON.stringify(transaction)}, message: `
    );
    console.log(err);
  }
}

async function editTransactions(transaction) {
  try {
    const { _id } = transaction;
    return await http.patch(`/${_id}`, transaction);
  } catch (err) {
    console.log(
      `Erro ao editar transação: ${JSON.stringify(transaction)}, message: `
    );
    console.log(err);
  }
}

export default {
  getYearMonth,
  deleteTransaction,
  createTransactions,
  editTransactions,
};
