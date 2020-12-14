import api from './api';

export const getBookingDetails = () => api.get('/booking');
export const updatePaidStatus = (booking) => api.put(`/booking/${booking.id}`, booking);
