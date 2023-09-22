import axios from "axios";

export const api = axios.create({
  baseURL: 'https://tamersgc-api.onrender.com'
});