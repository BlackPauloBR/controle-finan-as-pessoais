const express = require('express');
const transactionRouter = express.Router();

transactionRouter.get('/*');

module.exports = transactionRouter;
