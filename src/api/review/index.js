import api from '../api';

const addReview = (data) => {
    api.post('/reviews/', data);
  };

const updateReview = (id, data) => {
    api.put(`/reviews/${id}`, data);
  };

const getReview = (userId, movieId) => {
    api.get(`/reviews?movieId=${userId}&userId=${movieId}`);
};


export { addReview, updateReview, getReview};