import axios from 'axios';

export default axios.create({
  baseURL: `https://black-financas-pessoais.herokuapp.com/api/transaction`,
  headers: {
    'Content-type': 'application/json',
  },
});
