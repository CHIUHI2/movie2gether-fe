import api from '../api';

export const getMovieDetail = (id) => {
  return api.get(`/movies/${id}`);
}

export const getOnShowMovie = () => {
  return api.get(`/movies?mode=onShow&isRecommend=false`);
}
