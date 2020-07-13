import express from 'express';
import service from '../services/transactionService.js';
const transactionRouter = express.Router();

//Criação das Rotas
transactionRouter.get('/:yearMonth', service.listaYearMonth);

transactionRouter.post('/', service.insert);

transactionRouter.patch('/:_id', service.update);

transactionRouter.delete('/:_id', service.remove);

export { transactionRouter as routes };
