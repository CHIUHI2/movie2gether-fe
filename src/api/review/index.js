import api from '../api';

const addReview = (data) => {
  return api.post('/reviews', data);
  };

const updateReview = (id, data) => {
  return api.put(`/reviews/${id}`, data);
  };

const getReview = (sessionId, movieId, userId) => {
  return api.get(`/reviews?sessionId=${sessionId}&movieId=${movieId}&userId=${userId}`);
};


export { addReview, updateReview, getReview};
