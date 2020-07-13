import mongoose from 'mongoose';

let schema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0)
        throw new Error('Valor negativo para a nota não permitido.');
    },
  },
  category: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  yearMonth: {
    type: String,
    required: true,
  },
  yearMonthDay: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const TransactionModel = mongoose.model('transaction', schema);

export { TransactionModel };
