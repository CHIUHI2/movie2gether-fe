import './index.css';
import { Carousel } from 'antd-mobile';
import { useState, useEffect } from 'react';
import { getRecommendMoviesByMode } from '../../../api/movie';

const MovieListingRecommend = ({ tab }) => {
  const [movies, setMovies] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [imgHeight, setImgHeight] = useState(180);

  useEffect(() => {
    if (tab) {
      getRecommendMoviesByMode(tab).then((response) => {
        setMovies(response.data);
      });
    }
  }, [tab]);

  return (
    <>
      <div className="sub-title">
          Top Popular
      </div>
      <Carousel
        className="space-carousel"
        frameOverflow="visible"
        cellSpacing={10}
        slideWidth={0.8}
        autoplay
        infinite
        afterChange={(index) => setSlideIndex(index)}
      >
        {movies.map((movie, index) => (
          <a
            key={movie.id}
            href={`/movies/${movie.id}`}
            style={{
              top: slideIndex === index ? -10 : 0,
              height: imgHeight,
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.posterUrl}`}
              alt={movie.title}
              onLoad={() => {
                window.dispatchEvent(new Event('resize'));
                setImgHeight('auto');
              }}
            />
          </a>
        ))}
      </Carousel>
    </>
  );
};

export default MovieListingRecommend;
