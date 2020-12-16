import { useEffect, useState } from 'react';
import './style.css';
import classNames from 'classnames';

const SeatingMap = (props = { seats: [], bookings: [], onSelectSeat: () => {} }) => {
  const [seats, setSeats] = useState(props.seats);
  const [bookings, setBookings] = useState(props.bookings);
  const [selectedSeatIndex, setSelectedSeatIndex] = useState(null);
  useEffect(() => {
    setSeats(props.seats);
    setBookings(props.bookings);
  }, [props]);
  return (
    <div className="seating-map">
      {seats.map((seat, index) => {
        const booked = bookings.filter((booking) => booking.seatNumber === seat.number).length > 0;
        return (
          <div
            onClick={() => {
              if (!booked) {
                setSelectedSeatIndex(index);
                props.onSelectSeat(seat.number);
              }
            }}
            className={classNames({
              seat: true,
              booked,
              selected: selectedSeatIndex === index,
            })}
          >
            {seat.number}
          </div>
        );
      })}
    </div>
  );
};
export default SeatingMap;
