import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppLayout from '../../layouts/AppLayout';
import LoginPage from '../../pages/user/LoginPage';
import ProtectedRoute from '../ProtectedRoute';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <AppLayout>
        <ProtectedRoute exact path="/" />
      </AppLayout>
    </Switch>
  </Router>
);

export default AppRouter;
