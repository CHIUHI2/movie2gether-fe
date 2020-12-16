import api from '../api';

const registerUser = (data) => {
  return api.post('/auth/register', data);
};

const signInUser = (data) => {
  return api.post('/auth/login', data);
};

export { registerUser, signInUser };
