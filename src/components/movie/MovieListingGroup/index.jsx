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
      title: movie.title
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
    if(filterGenre === "all") {
      getMoviesByMode(tab).then((response) => {
        const gridData = responseToGridData(response.data);
        setMovies(gridData);
      });
    }
    else {
      getMoviesByModeAndGenre(tab, filterGenre).then((response) => {
        const gridData = responseToGridData(response.data);
        setMovies(gridData);
      });
    }
  };

  const moveToDetail = (item) => {
    history.push(`/movies/${item.id}`);
  };

  const [imgHeight, setImgHeight] = useState("100%");

  return (
    <>
      <div className="sub-title">
        Movies
        <MovieListingFunctionModal applyFilterHandler={updateMoviesByModeAndGenre} />
      </div>
      <Grid
        key={movies.length}
        data={movies}
        columnNum={3}
        square={false}
        isCarousel
        carouselMaxRow={5}
        itemStyle={{ background: 'rgba(0,0,0,.05)' }}
        onClick={(item) => moveToDetail(item)}
        hasLine={false}
        renderItem={dataItem => (
            <img
              src={dataItem.icon}
              style={{ width: '100%', height: imgHeight }}
              alt={dataItem.title}
              onLoad={() => {
                window.dispatchEvent(new Event('resize'));
                setImgHeight("100%");
              }}
            />
        )}
      />
    </>
  );
};

export default MovieListingGroup;
