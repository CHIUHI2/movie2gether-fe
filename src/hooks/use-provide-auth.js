import { useState } from 'react';

const useProvideAuth = () => {
  const [token, setToken] = useState(window.localStorage.getItem('backapin_access_token'));

  const signIn = (userResponse) => {
    const { accessToken, userName, id, email } = userResponse;
    setToken(accessToken);
    window.localStorage.setItem('backapin_access_token', accessToken);
    const user = {
      id,
      userName,
      email,
    };
    window.localStorage.setItem('backpain_user_profile', JSON.stringify(user));
  };

  const isLoggedIn = () => {
    return token;
  };

  const getUser = () => {
    try {
      const user = JSON.parse(window.localStorage.getItem('backpain_user_profile'));
      return user;
    } catch (err) {
      return {};
    }
  };

  return [getUser(), isLoggedIn(), signIn];
};

export default useProvideAuth;
