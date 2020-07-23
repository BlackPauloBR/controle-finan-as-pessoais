import axios from 'axios';

//Define a URL base da origem para consumo do servico
export const REACT_APP_API_URL = `http://localhost:${process.env.PORT}/api/transaction`;

export default axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
