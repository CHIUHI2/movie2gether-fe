import { useContext } from 'react';
import authContext from '../contexts/auth-context';

const useProvideAuth = () => {
  const auth = useContext(authContext);

  const signIn = (userResponse) => {
    const { accessToken, userName, id, email } = userResponse;
    window.localStorage.setItem('backapin_access_token', accessToken);
    auth.user = {
      id,
      userName,
      email,
    };
  };

  const isLoggedIn = () => {
    return window.localStorage.getItem('backapin_access_token');
  };

  return [auth.user, isLoggedIn, signIn];
};

export default useProvideAuth;
