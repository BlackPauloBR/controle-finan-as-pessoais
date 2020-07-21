import http from '../http-common.js';

async function deleteTransaction({ _id }) {
  try {
    return await http.delete(`/${_id}`);
  } catch (err) {
    console.log(`Erro ao deletar transação _id: ${_id}`);
  }
}

async function createTransactions(transaction) {
  try {
    return await http.post(`/`, transaction);
  } catch (err) {
    console.log(`Erro ao criar transação: ${transaction}`);
  }
}

export default { deleteTransaction, createTransactions };
