const useProvideAuth = () => {
  const signIn = (userResponse) => {
    const { accessToken, userName, id, email } = userResponse;
    window.localStorage.setItem('backapin_access_token', accessToken);
    const user = {
      id,
      userName,
      email,
    };
    window.localStorage.setItem('backpain_user_profile', JSON.stringify(user));
  };

  const isLoggedIn = () => {
    return window.localStorage.getItem('backapin_access_token');
  };

  const getUser = () => {
    try {
      const user = JSON.parse(window.localStorage.getItem('backpain_user_profile'));
      return user;
    } catch (err) {
      return {};
    }
  };

  return [getUser(), isLoggedIn, signIn];
};

export default useProvideAuth;
