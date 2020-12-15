import { useEffect, useState } from 'react';

const useProvideAuth = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({ name: 'test' });
  }, []);

  const signIn = () => true;

  const signOut = () => {
    setUser({});
  };

  const isLoggedIn = () => true;


  return [user, isLoggedIn, signIn, signOut];
};

export default useProvideAuth;
