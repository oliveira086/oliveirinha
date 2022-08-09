const axios = require('axios');
const url_da_api = 'http://177.153.59.47:8080';
// const url_da_api = 'http://localhost:8080';

axios.defaults.baseURL = `${url_da_api}`;

axios.interceptors.request.use(
  request => {
    const headers = {
      locale: 'pt-br',
      accept: '*/*',
      'Content-Type': 'application/json'
    };

    if (request.url.includes('files')) {
      headers.accept = '*/*'
      headers.ContentType = 'multipart/form-data'
    };

    request.headers = headers;
    return request;
  },
  err => {
    Promise.reject(err);
});


module.exports = axios;
