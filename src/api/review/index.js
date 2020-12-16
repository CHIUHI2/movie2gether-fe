import api from '../api';

const addReview = (data) => {
  return api.post('/reviews', data);
  };

const updateReview = (id, data) => {
  return api.put(`/reviews/${id}`, data);
  };

const getReview = (movieId, userId) => {
  return api.get(`/reviews?movieId=${movieId}&userId=${userId}`);
};


export { addReview, updateReview, getReview};
