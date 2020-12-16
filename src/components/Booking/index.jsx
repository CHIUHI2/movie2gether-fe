import { Button, Card, Carousel, List, Pagination, Picker } from 'antd-mobile';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getCinemas } from '../../api/cinema/cinema';
import { getOnShowMovie } from '../../api/movie/movie';
import { getSessions } from '../../api/session/sessionApi';
import './index.css';

const BookingPage = () => {
  const PAGE_CAPACITY = 10;
  const history = useHistory();

  const [movies, setMovies] = useState([]);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(-1);
  const [selectedSession, setSelectedSession] = useState(null);
  const [sessionPage, setSessionPage] = useState(0);
  const [sessionPageCount, setSessionPageCount] = useState(0);
  const [cinemaPage, setCinemaPage] = useState(0);
  const [cinemaPageCount, setCinemaPageCount] = useState(0);
  const [sessions, setSessions] = useState([]);
  const [cinemas, setCinemas] = useState([]);

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
      getSessions(sessionPage, PAGE_CAPACITY, movies[selectedMovieIndex].id).then(
        ({ content, totalPages }) => {
          setSessions(content);
          setSessionPageCount(totalPages);
        },
      );
    else {
      setCinemas([]);
      setCinemaPageCount(0);
    }
  }

  useEffect(() => {
    setCinemas([]);
    fetchCinemas();
    setSessions([]);
    fetchSessions();
    setSelectedSession(null);
  }, [selectedMovieIndex]);

  useEffect(() => {
    fetchSessions();
  }, [sessionPage]);

  useEffect(() => {
    fetchCinemas();
  }, [cinemaPage]);

  useEffect(() => {}, [selectedSession]);

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
              {cinemas.map((cinema) => (
                <Button key={cinema.id}>{cinema.name}</Button>
              ))}
            </div>
            <Pagination
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
              {sessions.map((session) => (
                <div key={session.id}>
                  <div>{dayjs(session.startTime).format('HH:mm')}</div>
                  <div>{dayjs(session.endTime).format('HH:mm')}</div>
                  <Button
                    onClick={() => {
                      history.push({
                        pathname: '/payment',
                        state: {
                          sessionId: session.id,
                          seat: 'A1',
                        },
                      });
                    }}
                  >
                    Book
                  </Button>
                </div>
              ))}
            </div>
            <Pagination
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
    </div>
  );
};

export default BookingPage;
