import './index.css'
import { useState } from 'react';
import { Grid } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import MovieListingFunctionModal from '../MovieListingFunctionModal';

const MovieListingGroup = (props) => {
  const history = useHistory();
  const { movies } = props;
  const [ filterGenre, setFilterGenre ] = useState(null);
  console.log(filterGenre);
  const data = movies.map((movie) => ({
    id: movie.id,
    icon: movie.url,
    text: movie.name
  }));

  const moveToDetail = (item) => {
    history.push(`/movies/${item.id}`);
  }

  return (
    <>
      <div className="sub-title">
        Movies
        <MovieListingFunctionModal selectedGenre={filterGenre} setFilterGenres={setFilterGenre} />
      </div>
      <Grid
        data={data}
        columnNum={3}
        square={false}
        isCarousel
        carouselMaxRow={5}
        onClick={item => moveToDetail(item)}
      />
    </ >
  );
}

export default MovieListingGroup;
