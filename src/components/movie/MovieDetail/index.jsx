import { Flex, WhiteSpace, WingBlank } from 'antd-mobile';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMovieDetail } from '../../../api/movie/movie';
import MoviePoster from '../MoviePoster';
import MovieGenres from '../MovieGenres';
import MovieRatings from '../MovieRatings';
import MovieOverview from '../MovieOverview';
import BookingButton from '../BookingButton';

const MovieDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    getMovieDetail(id)
      .then((response) => {
        setMovieDetail(response.data);
      })
      .catch(() => {
        history.push('/404');
      });
  }, [id]);

  return (
    <>
      {movieDetail && (
        <WingBlank>
          <WhiteSpace />
          <MoviePoster posterUrl={movieDetail.posterUrl} width={400} />
          <Flex justify="between">
            <h2>{movieDetail.title}</h2>
            <BookingButton movieId={movieDetail.id} />
          </Flex>
          <div>{movieDetail.releaseDate}</div>
          <WhiteSpace size="sm" />
          <MovieGenres genres={movieDetail.genres} />
          <WhiteSpace size="lg" />
          <MovieRatings rating={movieDetail.voteAverage} />
          <WhiteSpace size="lg" />
          <MovieOverview overview={movieDetail.overview} />
        </WingBlank>
      )}
    </>
  );
};

export default MovieDetail;
