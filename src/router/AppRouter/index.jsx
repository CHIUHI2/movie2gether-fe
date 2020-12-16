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
import BookingPage from '../../components/Booking';

const AppRouter = () => (
  <AppLayout>
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/booking" component={BookingPage} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/user/register" component={UserRegistrationPage} />
        <Route exact path="/paymentSuccess" component={PaymentSuccess} />
        <Route exact path="/paymentFailed" component={PaymentFailed} />
        <Route exact path="/test" />
        <Route exact path="/movies/:id" component={MovieDetail} />
        <Route exact path="/" component={MovieListingPage} />
        <Route path="/404" component={NotFoundPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </AppLayout>
);

export default AppRouter;
