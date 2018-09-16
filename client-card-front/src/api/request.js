/* eslint-disable */
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/clients'
});

const request = (url) => {
  return axiosInstance.get(url)
        .then(response => {
          console.log(response.data)
          return response.data
        })
        .catch(err => {throw new Error(err)})
}

export default request;