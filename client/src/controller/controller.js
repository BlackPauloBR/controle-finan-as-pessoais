import http from '../http-common.js';

async function deleteTransaction({ _id }) {
  try {
    return await http.delete(`/${_id}`);
  } catch (err) {
    console.log(`Erro ao deletar transação _id: ${_id}`);
  }
}

async function createTransactions(transaction) {
  console.log('cria transação');
}

export default { deleteTransaction, createTransactions };
