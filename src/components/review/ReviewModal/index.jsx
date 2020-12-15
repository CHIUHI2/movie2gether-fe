import { Modal, WhiteSpace, WingBlank } from 'antd-mobile';
import React from 'react';
import StarRating from '../StarRating';
import CommentTextArea from '../CommentTextArea';

const ReviewModal = ({openModal, closeModal, rating, setRating, comment, setComment, movieTitle}) => {
  // const [rating, setRating] = useState(null);
  // const [comment, setComment] = useState(null);

  const onClose = () => {
    closeModal();
    // console.log(userId + movieId);
};

  return (
    <WingBlank>
      <Modal
        visible={openModal}
        transparent
        maskClosable={false}
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
        <CommentTextArea comment={comment} setComment={setComment}/>
        <WhiteSpace />
        <StarRating rating={rating} setRating={setRating} />
      </Modal>
    </WingBlank>
  );
};

export default ReviewModal;
