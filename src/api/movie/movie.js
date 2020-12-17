import api from '../api';

export const getMovieDetail = (id, userId) => {
  return api.get(`/movies/${id}?userId=${userId}`);
};

export const getOnShowMovie = () => {
  return api.get(`/movies?mode=onShow&isRecommend=false`);
};
