import api from '../api';

const getAllFriends = (userId) => {
  return api.get(`/friends/${userId}`);
};

const addFriend = (userId, friendName) => {
  return api.post('/friends', { userId, friendName });
};

const unFriend = (userId, friendId) => {
  return api.post(`/friends/${friendId}`, { userId });
};

export { getAllFriends, addFriend, unFriend };
