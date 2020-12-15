import './index.css';

import { WhiteSpace } from 'antd-mobile';

const MovieOverview = ({ overview }) => {
  return (
    <>
      {overview && (
        <div>
          <div className="movie-overview-title">Sypnosis</div>
          <WhiteSpace size="sm" />
          <div>{overview}</div>
        </div>
      )}
    </>
  );
};

export default MovieOverview;
