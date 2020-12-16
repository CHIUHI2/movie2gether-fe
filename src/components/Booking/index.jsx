import { Button, Card, Carousel, List, Pagination, Picker } from 'antd-mobile';
import dayjs from 'dayjs';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getCinemas } from '../../api/cinema/cinema';
import { getOnShowMovie } from '../../api/movie/movie';
import { getSessions } from '../../api/session/sessionApi';
import './index.css';
import SeatingMap from './SeatMap';

const PAGINATION_LOCALE = {
  prevText: 'Prev',
  nextText: 'Next',
};

const BookingPage = () => {
  const PAGE_CAPACITY = 10;
  const history = useHistory();

  const [movies, setMovies] = useState([]);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(-1);
  const [selectedSessionIndex, setSelectedSessionIndex] = useState(null);
  const [selectedCinemaIndex, setSelectecCinemaIndex] = useState(null);
  const [sessionPage, setSessionPage] = useState(0);
  const [sessionPageCount, setSessionPageCount] = useState(0);
  const [cinemaPage, setCinemaPage] = useState(0);
  const [cinemaPageCount, setCinemaPageCount] = useState(0);
  const [sessions, setSessions] = useState([]);
  const [cinemas, setCinemas] = useState([]);
  const [selectedSeatNumner, setSelectedSeatNumner] = useState(null);

  useEffect(() => {
    getOnShowMovie('onShow', { isRecommend: false }).then(({ data }) => {
      setMovies(data);
      setSelectedMovieIndex(0);
    });
  }, []);

  function fetchCinemas() {
    if (movies.length > 0)
      getCinemas(cinemaPage, PAGE_CAPACITY, movies[selectedMovieIndex].id).then(
        ({ content, totalPages }) => {
          setCinemas(content);
          setCinemaPageCount(totalPages);
        },
      );
    else {
      setCinemas([]);
      setCinemaPageCount(0);
    }
  }

  function fetchSessions() {
    if (movies.length > 0)
      getSessions(
        sessionPage,
        PAGE_CAPACITY,
        movies[selectedMovieIndex].id,
        selectedCinemaIndex !== null ? cinemas[selectedCinemaIndex].id : null,
      ).then(({ content, totalPages }) => {
        setSessions(content);
        setSessionPageCount(totalPages);
      });
    else {
      setCinemas([]);
      setCinemaPageCount(0);
    }
  }

  useEffect(() => {
    setSelectedSeatNumner(null);
  }, [sessions, selectedSessionIndex]);

  useEffect(() => {
    fetchSessions();
    setSelectedSessionIndex(null);
  }, [selectedCinemaIndex]);

  useEffect(() => {
    fetchCinemas();
    fetchSessions();
    setSelectedSessionIndex(null);
    setSelectecCinemaIndex(null);
  }, [selectedMovieIndex]);

  useEffect(() => {
    fetchSessions();
  }, [sessionPage]);

  useEffect(() => {
    fetchCinemas();
  }, [cinemaPage]);

  useEffect(() => {}, [selectedSessionIndex]);

  return (
    <div style={{ height: '100%', flexGrow: 1 }}>
      <div>
        <Carousel
          infinite
          dots={false}
          arrows
          selectedIndex={selectedMovieIndex}
          afterChange={(newMovieIndex) => setSelectedMovieIndex(newMovieIndex)}
        >
          {movies.map((movie) => {
            if (movie.posterUrl) {
              return (
                <img
                  alt={movie.posterUrl}
                  src={`http://image.tmdb.org/t/p/w500/${movie.posterUrl}`}
                  style={{ objectFit: 'cover', minHeight: '50vh' }}
                  onLoad={() => {}}
                />
              );
            }
            return (
              <div style={{ height: '50vh', alignItems: 'center', textAlign: 'center' }}>
                No img
              </div>
            );
          })}
        </Carousel>
        <Picker
          data={movies.map((movie, index) => ({ value: index, label: movie.title }))}
          okText="Select"
          dismissText="Cancel"
          title="Movies"
          cols="1"
          extra=""
          value={[selectedMovieIndex]}
          onChange={([newMovieIndex]) => setSelectedMovieIndex(newMovieIndex)}
        >
          <List.Item arrow="down">Movie</List.Item>
        </Picker>
      </div>
      <Card>
        {cinemas.length > 0 ? (
          <div>
            <div id="cinema-table" className="booking-table">
              {cinemas.map((cinema, index) => (
                <div
                  key={cinema.id}
                  className={classNames({
                    'cinema-item': true,
                    selected: index === selectedCinemaIndex,
                  })}
                  onClick={() => {
                    setSelectecCinemaIndex(index !== selectedCinemaIndex ? index : null);
                  }}
                >
                  <div>{cinema.name}</div>
                </div>
              ))}
            </div>
            <Pagination
              locale={PAGINATION_LOCALE}
              current={cinemaPage + 1}
              onChange={(page) => {
                setCinemaPage(page - 1);
              }}
              total={cinemaPageCount}
            />
          </div>
        ) : (
          <div>No Cinemas</div>
        )}
      </Card>

      <Card>
        {sessions.length > 0 ? (
          <div>
            <div id="session-table" className="booking-table" cla>
              {sessions.map((session, index) => (
                <div
                  key={session.id}
                  className={classNames({
                    'session-item': true,
                    selected: index === selectedSessionIndex,
                  })}
                  onClick={() => {
                    setSelectedSessionIndex(index !== selectedSessionIndex ? index : null);
                  }}
                >
                  <div>{`${dayjs(session.startTime).format('HH:mm')} - ${dayjs(
                    session.endTime,
                  ).format('HH:mm')}`}</div>
                </div>
              ))}
            </div>
            <Pagination
              locale={PAGINATION_LOCALE}
              current={sessionPage + 1}
              onChange={(page) => {
                setSessionPage(page - 1);
              }}
              total={sessionPageCount}
            />
          </div>
        ) : (
          <div>No Sessions</div>
        )}
      </Card>
      {selectedSessionIndex !== null ? (
        <Card>
          <SeatingMap
            seats={sessions[selectedSessionIndex].cinema.seats}
            bookings={sessions[selectedSessionIndex].bookings}
            onSelectSeat={(seatNumber) => {
              setSelectedSeatNumner(seatNumber);
            }}
          />
          <Button
            disabled={selectedSeatNumner === null}
            onClick={() => {
              if (selectedSeatNumner === null) return;
              const session = sessions[selectedSessionIndex];
              history.push({
                pathname: '/payment',
                state: {
                  sessionId: session.id,
                  seatNumber: selectedSeatNumner,
                },
              });
            }}
          >
            Book
          </Button>
        </Card>
      ) : (
        ''
      )}
    </div>
  );
};

export default BookingPage;
