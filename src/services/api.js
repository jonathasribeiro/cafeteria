import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/jonathasribeiro/fake-json-api',
});

export default api;
