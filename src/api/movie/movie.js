import api from '../api';

export const getMovieDetail = (id) => {
  return api.get(`/movies/${id}`);
}
