import axios from 'axios';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const URL = 'https://httpbin.org/basic-auth/foo/bar';

const api = axios.create({
  baseURL: PROXY_URL + URL,
});

export default api;
