import axios from 'axios';

const axiosInstance = axios.create(process.env.REACT_APP_API_BASE_URL);

export default axiosInstance;
