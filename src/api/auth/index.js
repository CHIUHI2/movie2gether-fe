import api from '../api';

const registerUser = (data) => {
  api.post('/auth/register', data);
};

export { registerUser };
