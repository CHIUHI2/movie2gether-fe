import { Redirect, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import _ from 'lodash';

const ProtectedRoute = ({ component, exact, path }) => {
  const location = useLocation();
  const [loginStatus, setLoginStatus] = useState(
    !_.isEmpty(window.localStorage.getItem('backapin_access_token')),
  );

  useEffect(() => {
    setLoginStatus(!_.isEmpty(window.localStorage.getItem('backapin_access_token')));
  }, [location.pathname]);

  if (loginStatus) {
    return <Route exact={exact} path={path} component={component} />;
  }

  return (
    <Redirect
      to={{
        pathname: '/login',
        state: {
          from: location.pathname,
        },
      }}
    />
  );
};

export default ProtectedRoute;
