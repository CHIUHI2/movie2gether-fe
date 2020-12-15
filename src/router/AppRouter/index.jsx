import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFoundPage from '../../components/exception/NotFoundPage';
import Payment from '../../components/payment/Payment';
import PaymentFailed from '../../components/payment/PaymentFailed';
import PaymentSuccess from '../../components/payment/PaymentSuccess';
import LoginPage from '../../components/user/LoginPage';
import UserRegistrationPage from '../../components/user/UserRegistrationPage';
import AppLayout from '../../layouts/AppLayout';
import ProtectedRoute from '../ProtectedRoute';

const AppRouter = () => (
  <AppLayout>
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/user/register" component={UserRegistrationPage} />
        <Route exact path="/paymentSuccess" component={PaymentSuccess} />
        <Route exact path="/paymentFailed" component={PaymentFailed} />
        <Route exact path="/test" />
        <ProtectedRoute exact path="/" />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </AppLayout>
);

export default AppRouter;
