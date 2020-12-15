import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import NotFoundPage from '../../components/exception/NotFoundPage';
import MovieListingPage from '../../components/movie/MovieListingPage';
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
        <Route exact path="/movies" component={MovieListingPage} />
        <Route exact path="/user/register" component={UserRegistrationPage} />
        <Route exact path="/test" />
        <Route exact path="/movies/:id" component={MovieDetail} />
        <ProtectedRoute exact path="/" />
        <Route path="/404" component={NotFoundPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </AppLayout>
);

export default AppRouter;
