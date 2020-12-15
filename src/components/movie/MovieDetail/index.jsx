import './index.css';
import { Button, Flex, WhiteSpace } from 'antd-mobile';

// import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  // const { id } = useParams();

  const onClick = () => {
    console.log('link to booking');
  };

  return (
    <>
      <img
        className="movie-detail-poster"
        src="https://image.tmdb.org/t/p/w500/vlOgaxUiMOA8sPDG9n3VhQabnEi.jpg"
        alt="Poster"
      />
      <Flex justify="between">
        <h2>movieDetail.title</h2>
        <Button type="primary" inline size="small" onClick={onClick}>
          + Booking
        </Button>
      </Flex>
      <div>movieDetail.releaseDate</div>
      <div>movieDetail.genres</div>
      <WhiteSpace size="xl" />
      <div>rating</div>
      <WhiteSpace size="xl" />
      <div>Synopsis</div>
      <WhiteSpace size="xl" />
      <div>movieDetail.overview</div>
    </>
  );
};

export default MovieDetail;
