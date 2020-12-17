import { Flex, WhiteSpace, WingBlank } from 'antd-mobile';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import { getMovieDetail } from '../../../api/movie/movie';
import MoviePoster from '../MoviePoster';
import MovieGenres from '../MovieGenres';
import MovieRatings from '../MovieRatings';
import MovieOverview from '../MovieOverview';
import BookingButton from '../BookingButton';
import FriendsAlsoBooked from '../FriendsAlsoBooked';
import MovieReviewList from '../MovieReviewList';

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

  const getFormattedReleaseDate = (dateTime) => {
    return dayjs(dateTime).format('YYYY-MM-DD');
  };

  return (
    <>
      {movieDetail && (
        <WingBlank>
          <WhiteSpace />
          <MoviePoster posterUrl={movieDetail.posterUrl} width={400} />
          <Flex justify="between">
            <div>
              <h2>{movieDetail.title}</h2>
              <FriendsAlsoBooked friends={movieDetail.friends} />
            </div>
            <h2>{movieDetail.title}</h2>
            {movieDetail.onShow && <BookingButton movieId={movieDetail.id} />}
          </Flex>
          <div>{getFormattedReleaseDate(movieDetail.releaseDate)}</div>
          <WhiteSpace size="sm" />
          <MovieGenres genres={movieDetail.genres} />
          <WhiteSpace size="lg" />
          <MovieRatings rating={movieDetail.voteAverage} />
          <WhiteSpace size="lg" />
          <MovieOverview overview={movieDetail.overview} />
          <WhiteSpace size="lg" />
          <MovieReviewList movieId={movieDetail.id} />
          <WhiteSpace size="lg" />
        </WingBlank>
      )}
    </>
  );
};

export default MovieDetail;
