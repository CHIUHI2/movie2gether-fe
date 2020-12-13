import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFoundPage from '../../components/exception/NotFoundPage';
import LoginPage from '../../components/user/LoginPage';
import AppLayout from '../../layouts/AppLayout';
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
