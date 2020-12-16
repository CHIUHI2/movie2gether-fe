import './index.css';
import { useEffect, useState } from 'react';
import { Image } from 'antd';
import dayjs from 'dayjs';
import icon from './icon.png';
import { getSessionById } from '../../../api/paymentDetails';

const BookingDetails = ({ sessionId, seatNumber }) => {
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    if (sessionId) {
      getSessionById(sessionId).then((response) => {
        setBookingDetails(response.data);
      });
    }
  }, [sessionId]);

  const getSessionDateInYYYYMMDDFormat = (datetime) => {
    return dayjs(datetime).format('YYYY-MM-DD');
  };

  const getMovieTimeInHHmmFormat = (datetime) => {
    return dayjs(datetime).format('HH:mm');
  };
  return (
    <div>
      <div>
        <h3>
          <u>Booking Details </u>
          <Image className="image" width={100} src={icon} />
        </h3>
        {bookingDetails && (
          <>
            <p>
              <b>Movie:</b> {bookingDetails.movie.title}
            </p>
            <p>
              <b>Cinema:</b> {bookingDetails.cinema.name}
            </p>
            <p>
              <b>Date:</b> {getSessionDateInYYYYMMDDFormat(bookingDetails.startTime)}
            </p>
            <p>
              <b>Time:</b> {getMovieTimeInHHmmFormat(bookingDetails.startTime)} -{' '}
              {getMovieTimeInHHmmFormat(bookingDetails.endTime)}
            </p>
            <p>
              <b>Seat(s):</b> {seatNumber.sort().join(', ')}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
export default BookingDetails;
