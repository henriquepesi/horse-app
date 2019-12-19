import axios from 'axios';

const api = axios.create({
  baseURL: 'https://xooz0jxyu6.execute-api.us-east-1.amazonaws.com/v1/horses',
});

export default api;
