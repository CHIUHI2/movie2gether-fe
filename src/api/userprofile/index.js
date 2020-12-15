import api from '../api';

const getUser = (id) => {
 return api.get(`/user/${id}`);
};

const getBookingByUserId = (id) => {
  return api.get(`/booking?userId=${id}`);
}

const getSessionBySessionId = (id) => {
  return api.get(`/session/?userId=${id}`);
}

const getMovieByMovieId = (id) => {
  return api.get(`/booking?sessionId=${id}`);
}

export {getUser, getBookingByUserId, getSessionBySessionId, getMovieByMovieId};