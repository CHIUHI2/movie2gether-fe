import './index.css'
import { Carousel } from 'antd-mobile';
import { useState } from 'react';

const MovieListingRecommend = (props) => {
  const { movies } = props;
  const [slideIndex, setSlideIndex] = useState(0);
  const [imgHeight, setImgHeight] = useState(180);

  return (
    <Carousel
      className="space-carousel"
      frameOverflow="visible"
      cellSpacing={10}
      slideWidth={0.8}
      autoplay
      infinite
      afterChange={index => setSlideIndex(index)}
    >
      {
        movies.map((movie, index) => (
          <a
            key={movie.id}
            href={`/movies/${movie.id}`}
            style={{
              top: slideIndex === index ? -10 : 0,
              height: imgHeight
            }}
          >
            <img
              src={movie.url}
              alt={movie.name}
              onLoad={() => {
                window.dispatchEvent(new Event('resize'));
                setImgHeight("auto");
              }}
            />
          </a>
        ))
      }
    </Carousel>
  );
}

export default MovieListingRecommend;
