import { Carousel, List, Pagination, Picker, Tabs } from 'antd-mobile';
import { useEffect , useState } from 'react';

import { getOnShowMovies } from '../../api/movie/mockmovie';
import { getSessions } from '../../api/session/sessionApi';
import './index.css';

const BookingPage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
  const [selectedSession, setSelectedSession] = useState(null);
  const [sessionPage, setSessionPage] = useState(0);
  const [sessionCount, setSessionCount] = useState(0);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    getOnShowMovies().then(({ data }) => {
      setMovies(data);
    });
  }, []);

  useEffect(() => {
    setSessions([]);
    setSessionPage(0);
    setSelectedMovieIndex(null);
    setSelectedSession(null);
  }, [selectedMovieIndex]);

  useEffect(() => {
    if (movies.length > 0)
      getSessions(sessionPage, 10, movies[selectedMovieIndex].id).then(
        ({ content, totalElements }) => {
          setSessions(content);
          setSessionCount(totalElements);
        },
      );
  }, [sessionPage]);

  useEffect(() => {}, [selectedSession]);

  return (
    <div style={{ height: '100%', flexGrow: 1 }}>
      <Tabs
        swipeable={false}
        tabs={[
          { title: 'Movie', sub: '1' },
          { title: 'Cinema', sub: '2' },
          { title: 'Session', sub: '3' },
        ]}
      >
        <div>
          <Carousel
            infinite
            selectedIndex={selectedMovieIndex}
            afterChange={(newMovieIndex) => setSelectedMovieIndex(newMovieIndex)}
          >
            {movies.map((movie) => {
              return (
                <img
                  alt={movie.posterUrl}
                  src={movie.posterUrl}
                  style={{ objectFit: 'cover' }}
                  onLoad={() => {}}
                />
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
        <div>
          <Pagination current={sessionPage + 1} total={sessionCount} />
          <div id="session-table">
            {sessions.map((session) => (
              <div>{session.cinema.name}</div>
            ))}
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default BookingPage;
