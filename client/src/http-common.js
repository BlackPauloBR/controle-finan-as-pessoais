import axios from 'axios';

export default axios.create({
  baseURL:
    `http://localhost:${process.env.PORT}/api/transaction` ||
    `https://black-financas-pessoais.herokuapp.com/api/transaction`,
  headers: {
    'Content-type': 'application/json',
  },
});
