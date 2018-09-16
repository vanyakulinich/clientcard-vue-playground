/* eslint-disable */
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/clients'
});

const request = async () => {
  return axiosInstance
    .get()
    .then(response => response.data.map((el, i) => {return {...el, id: i}}))
    .catch(err => {throw new Error(err)})
}

export default request;