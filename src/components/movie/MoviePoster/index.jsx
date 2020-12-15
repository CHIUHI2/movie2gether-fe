import './index.css';
import { POSTER_BASE_URL } from '../../../common/constants/movie';

const MoviePoster = ({ posterUrl, width = 500 }) => {
  const posterPath = `${POSTER_BASE_URL}/w${width}${posterUrl}`;

  return <img className="movie-detail-poster" src={posterPath} alt="Poster" />;
};

export default MoviePoster;
