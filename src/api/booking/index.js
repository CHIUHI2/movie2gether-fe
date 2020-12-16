import api from '../api';

const createBooking = (userId, sessionId, seatNumber) => {
  return api.post('/bookings', {
    userId,
    sessionId,
    seatNumber,
  });
};

export { createBooking };
