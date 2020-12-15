import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import NotFoundPage from '../../components/exception/NotFoundPage';
import MovieDetail from '../../components/movie/MovieDetail';
import LoginPage from '../../components/user/LoginPage';
import UserRegistrationPage from '../../components/user/UserRegistrationPage';
import AppLayout from '../../layouts/AppLayout';
import ProtectedRoute from '../ProtectedRoute';

const AppRouter = () => (
  <AppLayout>
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/user/register" component={UserRegistrationPage} />
        <Route exact path="/test" />
        <Route exact path="/movies/:id" component={MovieDetail} />
        <ProtectedRoute exact path="/" />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </AppLayout>
);

export default AppRouter;
