import express from 'express';
const transactionRouter = express.Router();

transactionRouter.get('/*');

export default { transactionRouter };
