import { Redirect, Route } from 'react-router-dom';

import useProvideAuth from '../../hooks/use-provide-auth';

const ProtectedRoute = ({ component, exact, path }) => {
  const [, isLoggedIn] = useProvideAuth();

  if (isLoggedIn()) {
    return <Route exact={exact} path={path} component={component} />;
  }

  return (
    <Redirect
      to={{
        pathname: '/login',
        state: {
          from: '',
        },
      }}
    />
  );
};

export default ProtectedRoute;
