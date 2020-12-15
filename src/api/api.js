import axios from 'axios';

const axiosInstance = axios.create({
 // baseURL: process.env.REACT_APP_API_BASE_URL,

  baseURL: "https://5fd824da9dd0db0017ee9fde.mockapi.io/"
});

export default axiosInstance;
