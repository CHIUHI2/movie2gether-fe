import { StarFilled } from '@ant-design/icons';

const MovieRatings = ({ rating }) => {
  return (
    <>
      {rating && (
        <div>
          <StarFilled /> {rating}
        </div>
      )}
    </>
  );
};

export default MovieRatings;
