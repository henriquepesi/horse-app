import axios from 'axios';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const URL = 'https://xooz0jxyu6.execute-api.us-east-1.amazonaws.com/v1/horses';

const api = axios.create({
  baseURL: PROXY_URL + URL,
  // baseURL: "http://localhost:3333"
});

export default api;
