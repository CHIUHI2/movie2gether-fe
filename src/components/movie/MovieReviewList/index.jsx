import { StarFilled } from '@ant-design/icons';
import { Card, Pagination, WhiteSpace } from 'antd-mobile';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { getReviewsByMovieIdAndPage } from '../../../api/review';
import './index.css';

const PAGINATION_LOCALE = {
  prevText: 'Prev',
  nextText: 'Next',
};

const MovieReviewList = ({ movieId }) => {
  const [reviewPageCount, setReviewPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    if (movieId) {
      setCurrentPage(1);
    }
  }, [movieId]);

  useEffect(() => {
    if (currentPage) {
      getReviewsByMovieIdAndPage(movieId, currentPage).then((response) => {
        const { content, totalPages } = response.data;
        setReviewList(content);
        setReviewPageCount(totalPages);
      });
    }
  }, [currentPage]);

  const getFormattedReleaseDate = (dateTime) => {
    return dayjs(dateTime).format('YYYY-MM-DD');
  };

  const renderUserNameTitle = (review) =>(
    <>
      <b>{review.userName}</b>
      <span className="review-date">{getFormattedReleaseDate(review.lastModifiedAt)}</span>
    </>
  );

  const renderRatingSection = (review) => (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingvalue = index + 1;

        return (
          <StarFilled
            className="star"
            style={ratingvalue <= review.rating ? { color: '#ffc107' } : { color: '#e4e5e9' }}
          />
        );
      })}
    </div>
  );

  return (
    <>
      {reviewList && (
        <>
          {reviewList.map((review) => (
            <>
              <Card>
                <Card.Header
                  title={renderUserNameTitle(review)}
                  extra={renderRatingSection(review)}
                />
                <Card.Body>
                  <div>{review.comment}</div>{' '}
                </Card.Body>
              </Card>
              <WhiteSpace size="sm" />
            </>
          ))}
          {reviewPageCount > 0 && (
            <Pagination
              locale={PAGINATION_LOCALE}
              current={currentPage}
              onChange={(page) => {
                setCurrentPage(page);
              }}
              total={reviewPageCount}
            />
          )}
        </>
      )}
    </>
  );
};

export default MovieReviewList;
