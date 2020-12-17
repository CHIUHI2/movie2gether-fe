import './index.css';
import _ from 'lodash';
import { useState } from 'react';
import { Modal, WhiteSpace } from 'antd-mobile';

const FriendsAlsoBooked = ({ friends }) => {
  const [showModal, setShowModal] = useState(false);
  const friendsCount = _.size(friends);
  const modalTitle = 'Friends also watched';

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const generateFriendsMessage = () => {
    if (friendsCount === 1) {
      const firstFriend = _.first(friends);
      return `${firstFriend} watched this movie`;
    }

    if (friendsCount > 1) {
      const firstFriend = _.first(friends);
      return (
        <>
          <div>
            {firstFriend} and{' '}
            <span className="more-btn" onClick={openModal}>
              more
            </span>{' '}
            also watched this movie
          </div>
        </>
      );
    }

    return '';
  };

  return (
    <>
      {friendsCount > 0 && (
        <>
          <div className="friends-message-container">{generateFriendsMessage()}</div>
          <Modal
            visible={showModal}
            transparent
            maskClosable
            onClose={closeModal}
            title={modalTitle}
            footer={[
              {
                text: 'Ok',
                onPress: closeModal,
              },
            ]}
          >
            <WhiteSpace size="sm" />
            <div className="friends-list-container">
              {friends.map((friend) => (
                <div>
                  <span>{friend}</span>
                </div>
              ))}
            </div>
            <WhiteSpace size="sm" />
          </Modal>
        </>
      )}
    </>
  );
};

export default FriendsAlsoBooked;
