// import api from '../api';
import axios from 'axios';

const axiosTestingInstance = axios.create({
   baseURL: "http://localhost:8085/"
 });

const addReview = (data) => {
  return axiosTestingInstance.post('/reviews/', data);
  };

const updateReview = (id, data) => {
  return axiosTestingInstance.put(`/reviews/${id}`, data);
  };

const getReview = (movieId, userId) => {
  return axiosTestingInstance.get(`/reviews?movieId=${movieId}&userId=${userId}`);
};


export { addReview, updateReview, getReview};
