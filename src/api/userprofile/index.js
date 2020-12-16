import api from '../api';

const getUser = (id) => {
 return api.get(`/user/${id}`);
};

const getBookingsWithPaginationByUserId = (page, pageSize, userId) => {
  return api.get(`bookings?page=${page}&pageSize=${pageSize}&userId=${userId}`);
 };
 

export {getUser, getBookingsWithPaginationByUserId};