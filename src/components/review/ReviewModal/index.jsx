import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import StarRating from '../StarRating';
import CommentTextArea from '../CommentTextArea';

import React, { useState } from 'react';

const ReviewModal = () => {
  const [modal1, setModal1] = useState(false);

  const showModal = () => {
    setModal1(true);
  };

  const onClose = () => {
    console.log('closed');
    setModal1(false);
  };

  return (
    <WingBlank>
      <Button onClick={showModal}>Movie Title</Button>
      <WhiteSpace />
      <Modal
        visible={modal1}
        transparent
        maskClosable={false}
        onClose={onClose}
        title="Review"
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
        <CommentTextArea />
        <WhiteSpace />
        <StarRating />
      </Modal>
    </WingBlank>
  );
};

export default ReviewModal;
