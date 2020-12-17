import api from '../api';

const getAllFriends = (userId) => {
  return api.get(`/users/${userId}`);
};

const addFriend = (userId, friendName) => {
  return api.patch(`/users/${userId}/friends`, {
    targetUserName: friendName,
    action: 'ADD_FRIEND',
  });
};

const unFriend = (userId, friendName) => {
  return api.patch(`/users/${userId}/friends`, {
    targetUserName: friendName,
    action: 'UNFRIEND',
  });
};

export { getAllFriends, addFriend, unFriend };
