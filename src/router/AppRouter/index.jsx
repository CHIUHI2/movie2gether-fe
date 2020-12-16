import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFoundPage from '../../components/exception/NotFoundPage';
import Payment from '../../components/payment/Payment';
import PaymentFailed from '../../components/payment/PaymentFailed';
import PaymentSuccess from '../../components/payment/PaymentSuccess';
import MovieListingPage from '../../components/movie/MovieListingPage';
import MovieDetail from '../../components/movie/MovieDetail';
import LoginPage from '../../components/user/LoginPage';
import UserRegistrationPage from '../../components/user/UserRegistrationPage';
import AppLayout from '../../layouts/AppLayout';
import UserProfilePage from '../../components/userprofile/UserProfilePage';
import BookingPage from '../../components/Booking';
import ProtectedRoute from '../ProtectedRoute';

const AppRouter = () => (
  <Router>
    <AppLayout>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/user/register" component={UserRegistrationPage} />
        <ProtectedRoute exact path="/booking" component={BookingPage} />
        <ProtectedRoute exact path="/booking/:movieId" component={BookingPage} />
        <ProtectedRoute exact path="/payment" component={Payment} />
        <ProtectedRoute exact path="/paymentSuccess" component={PaymentSuccess} />
        <ProtectedRoute exact path="/paymentFailed" component={PaymentFailed} />
        <ProtectedRoute exact path="/test" />
        <ProtectedRoute exact path="/movies/:id" component={MovieDetail} />
        <ProtectedRoute exact path="/userprofile/" component={UserProfilePage} />
        <ProtectedRoute exact path="/" component={MovieListingPage} />
        <Route path="/404" component={NotFoundPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </AppLayout>
  </Router>
);

export default AppRouter;
