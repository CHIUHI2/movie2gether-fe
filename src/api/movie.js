import api from './api';

const getMoviesByMode = (mode) => {
  return api.get(`/movies?isRecommend=false&mode=${mode}`);
};

const getRecommendMoviesByMode = (mode) => {
  return api.get(`/movies?isRecommend=true&mode=${mode}`);
};

export { getMoviesByMode, getRecommendMoviesByMode };
