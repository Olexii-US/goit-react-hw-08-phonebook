import axios from 'axios';

export const priveteApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const publicApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
