import './index.css';

import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  return (
    <>
      <img
        className="movie-detail-poster"
        src="https://image.tmdb.org/t/p/w500/vlOgaxUiMOA8sPDG9n3VhQabnEi.jpg"
        alt="Poster"
      />
      <div>{id}</div>
    </>
  );
};

export default MovieDetail;
