import { Modal, WhiteSpace, WingBlank, TextareaItem } from 'antd-mobile';
import { StarFilled } from '@ant-design/icons';
import './index.css';
import React, { useState, useEffect } from 'react';
import { getReview, addReview, updateReview } from '../../../api/review';

const ReviewModal = ({ openModal, closeModal, movieTitle }) => {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState(null);
  const [reviewId, setReviewId] = useState(null);

  useEffect(() => {
    getReview('5fd77c99e5f7d6417d7abac2', '5fd81ac741ea7016828cfd39').then((response) => {
      setRating(response.data.rating);
      setComment(response.data.comment);
      setReviewId(response.data.id);
    });
  }, []);

  const onClose = () => {
    if (reviewId == null && rating != null && comment != null) {
      const review = {
        movieId: '5fd77c99e5f7d6417d7abac2',
        userId: '5fd81ac741ea7016828cfd39',
        rating,
        comment,
      };
      addReview(review).then((response) => {
        setRating(response.data.rating);
        setComment(response.data.comment);
        setReviewId(response.data.id);
      });
    } else {
      const updatedReview = {
        movieId: '5fd77c99e5f7d6417d7abac2',
        userId: '5fd81ac741ea7016828cfd39',
        rating,
        comment,
      };
      updateReview(reviewId, updatedReview).then((response) => {
        setRating(response.data.rating);
        setComment(response.data.comment);
      });
    }

    closeModal();
  };

  return (
    <WingBlank>
      <Modal
        visible={openModal}
        transparent
        maskClosable
        onClose={onClose}
        title={movieTitle}
        footer={[
          {
            text: 'Save',
            onPress: () => {
              onClose();
            },
          },
        ]}
      >
        <WhiteSpace />
        <TextareaItem
          className="comment"
          rows={5}
          count={100}
          value={comment}
          placeholder="Write your comment here..."
          onChange={(content) => setComment(content)}
        />
        <WhiteSpace />
        <div>
          <span>Rating: </span>
          {[...Array(5)].map((star, index) => {
            const ratingvalue = index + 1;

            return (
              <StarFilled
                className="star"
                style={ratingvalue <= rating ? { color: '#ffc107' } : { color: '#e4e5e9' }}
                onClick={() => setRating(ratingvalue)}
              />
            );
          })}
        </div>
      </Modal>
    </WingBlank>
  );
};

export default ReviewModal;
