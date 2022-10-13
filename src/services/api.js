import axios from 'axios'

export const api = axios.create({
  baseURL: "http://oliveirinha.tech:8080/",
});