import { WingBlank } from 'antd-mobile';
import MovieListingGroup from '../MovieListingGroup';
import MovieListingRecommend from '../MovieListingRecommend';

const MovieListingTabContent = ({ tab }) => {
  return (
    <WingBlank>
      <MovieListingRecommend tab={tab} />
      <MovieListingGroup tab={tab} />
    </WingBlank>
  );
};

export default MovieListingTabContent;
