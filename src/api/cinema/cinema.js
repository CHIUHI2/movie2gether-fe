import api from '../api';

export const getCinemas = async (page, pageSize, movieId) => {
  const res = await api.get(`/cinemas?page=${page}&pageSize=${pageSize}${(movieId ? `&movieId=${movieId}` : '')}`
  );
  return res.data;
}
