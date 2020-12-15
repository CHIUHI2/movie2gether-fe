import './index.css';

import { Tag } from 'antd-mobile';
import { v4 as uuidv4 } from 'uuid';

const MovieGenres = ({ genres }) => {
  return (
    <div className="genres-tag-container">
      {genres &&
        genres.map((genre) => (
          <Tag small key={uuidv4()}>
            {genre}
          </Tag>
        ))}
    </div>
  );
};

export default MovieGenres;
