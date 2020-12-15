import { Tag } from 'antd-mobile';

const MovieGenres = ({ genres }) => {
  return <div>{genres && genres.map((genre) => <Tag>{genre}</Tag>)}</div>;
};

export default MovieGenres;
