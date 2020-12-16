import { useEffect, useState } from 'react';
import './style.css';
import classNames from 'classnames';

const SeatingMap = (props = { seats: [], bookings: [], onSelectSeatNumbers: () => {} }) => {
  const [seats, setSeats] = useState(props.seats);
  const [bookings, setBookings] = useState(props.bookings);
  const [selectedSeatIndexes, setSelectedSeatIndexes] = useState([]);
  useEffect(() => {
    setSeats(props.seats);
    setBookings(props.bookings);
  }, [props]);

  useEffect(() => {
    props.onSelectSeatNumbers(selectedSeatIndexes.map((index) => seats[index].number));
  }, [selectedSeatIndexes]);

  return (
    <div className="seating-map">
      {seats.map((seat, index) => {
        const booked = bookings.filter((booking) => booking.seatNumber === seat.number).length > 0;
        return (
          <div
            onClick={() => {
              if (!booked) {
                if (selectedSeatIndexes.includes(index))
                  setSelectedSeatIndexes(selectedSeatIndexes.filter((i) => i !== index));
                else setSelectedSeatIndexes([...selectedSeatIndexes, index]);
              }
            }}
            className={classNames({
              seat: true,
              booked,
              selected: selectedSeatIndexes.includes(index),
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
