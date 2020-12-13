import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppLayout from '../../layouts/AppLayout';
import NotFoundPage from '../../pages/exception/NotFoundPage';
import LoginPage from '../../pages/user/LoginPage';
import ProtectedRoute from '../ProtectedRoute';

const AppRouter = () => (
  <AppLayout>
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/test" />
        <ProtectedRoute exact path="/" />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </AppLayout>
);

export default AppRouter;
