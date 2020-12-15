import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import React, { useState } from 'react';
import StarRating from '../StarRating';
import CommentTextArea from '../CommentTextArea';

const ReviewModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState(null);

  const showModal = () => {
    setOpenModal(true);
  };

  const onClose = () => {
    setOpenModal(false);
  };

  return (
    <WingBlank>
      <Button onClick={showModal}>Review</Button>
      <WhiteSpace />
      <Modal
        visible={openModal}
        transparent
        maskClosable={false}
        onClose={onClose}
        title="Movie Title"
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
