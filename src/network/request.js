import axios from 'axios';

export function instance1 (config) {
  const instance = axios.create({
    baseURL: 'http://127.207.32.32:8000/',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    console.log(config);
    return config;
  }, err => {

  });
  instance.interceptors.response.use(response => {
    return response.data;
  }, err => {
    console.log(err)
  })
  return instance(config);
}