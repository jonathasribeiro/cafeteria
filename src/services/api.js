import axios from 'axios';

const api = axios.create({
  baseURL: 'http://cafeteriabackend.herokuapp.com',
});

export default api;
