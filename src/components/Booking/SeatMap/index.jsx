/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react';
import './style.css';
import classNames from 'classnames';
import _ from 'lodash';
import { Flex } from 'antd-mobile';

const SeatingMap = (props = { seats: [], bookings: [], onSelectSeatNumbers: () => {} }) => {
  const [seats, setSeats] = useState(props.seats);
  const [seatMapByRow, setSeatMapByRow] = useState([]);
  const [bookings, setBookings] = useState(props.bookings);
  const [selectedSeatIndexes, setSelectedSeatIndexes] = useState([]);

  const groupSeatsByRow = (seatsArray) => {
    const seatsWithIndex = _.forEach(seatsArray, (seat, index) => {
      seat.index = index;
    });

    const result = _(seatsWithIndex)
      .groupBy((object) => object.number[0].toUpperCase())
      .map((seatings, letter) => ({
        letter,
        seatings,
      }))
      .value();

    return result;
  };

  useEffect(() => {
    setSeats(props.seats);
    setBookings(props.bookings);
    setSeatMapByRow(groupSeatsByRow(props.seats));
  }, [props]);

  useEffect(() => {
    setSelectedSeatIndexes([]);
  }, [props.seats]);

  useEffect(() => {
    props.onSelectSeatNumbers(selectedSeatIndexes.map((index) => seats[index].number));
  }, [selectedSeatIndexes]);

  const rednerSeatByRow = (row) => {
    return (
      <div className="seating-map-row-container">
        <Flex>
          {row.seatings.map((seat) => {
            const { index } = seat;
            const booked =
              bookings.filter((booking) => booking.seatNumber === seat.number).length > 0;
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
        </Flex>
      </div>
    );
  };

  return (
    <>
      <div className="screen-container">SCREEN</div>
      <div className="seating-map">{seatMapByRow.map((row) => rednerSeatByRow(row))}</div>
    </>
  );
};
export default SeatingMap;
