import api from '../api';

const createBooking = (userId, sessionId, seatNumbers) => {
  return api.post('/bookings', {
    userId,
    sessionId,
    seatNumbers,
  });
};

export { createBooking };
