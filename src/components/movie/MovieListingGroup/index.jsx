import './index.css';
import { useState, useEffect } from 'react';
import { Grid } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import MovieListingFunctionModal from '../MovieListingFunctionModal';
import { getMoviesByMode, getMoviesByModeAndGenre } from '../../../api/movie';

const MovieListingGroup = ({ tab }) => {
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const responseToGridData = (movieData) => {
    return movieData.map((movie) => ({
      id: movie.id,
      icon: `https://image.tmdb.org/t/p/w500${movie.posterUrl}`,
      text: movie.title,
    }));
  };

  useEffect(() => {
    if (tab) {
      getMoviesByMode(tab).then((response) => {
        const gridData = responseToGridData(response.data);
        setMovies(gridData);
      });
    }
  }, [tab]);

  const updateMoviesByModeAndGenre = (filterGenre) => {
    getMoviesByModeAndGenre(tab, filterGenre).then((response) => {
      const gridData = responseToGridData(response.data);
      setMovies(gridData);
    });
  };

  const moveToDetail = (item) => {
    history.push(`/movies/${item.id}`);
  };

  return (
    <>
      <div className="sub-title">
        Movies
        <MovieListingFunctionModal applyFilterHandler={updateMoviesByModeAndGenre} />
      </div>
      <Grid
        data={movies}
        columnNum={3}
        square={false}
        isCarousel
        carouselMaxRow={5}
        onClick={(item) => moveToDetail(item)}
      />
    </>
  );
};

export default MovieListingGroup;
