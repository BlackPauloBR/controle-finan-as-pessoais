import { TransactionModel } from '../models/TransactionModel.js';
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

const listaYearMonth = async (req, res) => {
  try {
    const { yearMonth } = req.params;
    const list = await TransactionModel.find({ yearMonth });
    res.send({ length: list.length, transactions: list });
  } catch (err) {
    res.status(500).send(err);
  }
};

const insert = async (req, res) => {
  try {
    const transaction = new TransactionModel(req.body);
    await transaction.save();
    res.send(transaction);
  } catch (err) {
    res.status(500).send(err);
  }
};

const update = async (req, res) => {
  try {
    const transaction = await TransactionModel.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    );

    res.send(transaction);
  } catch (err) {
    res.status(500).send(err);
  }
};

const remove = async (req, res) => {
  try {
    const query = await TransactionModel.findByIdAndDelete(req.params._id);

    query
      ? res.send({ messege: 'Transação deletada com sucesso.' })
      : res.send();
  } catch (err) {
    res.status(500).send(err);
  }
};

export default { listaYearMonth, insert, update, remove };
