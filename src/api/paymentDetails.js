import api from './api';

const updatePaidStatus = (booking) => api.put(`/booking/${booking.id}`, booking);
const getUser = (id) => {
  return api.get(`/user/${id}`);
};
const getBookingById = (id) => {
  return api.get(`/booking?userId=${id}`);
};
const getSessionById = (id) => {
  return api.get(`/sessions/${id}`);
};
const getMovieById = (id) => {
  return api.get(`/booking?sessionId=${id}`);
};
export { getUser, getBookingById, getSessionById, getMovieById, updatePaidStatus };
