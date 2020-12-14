import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFoundPage from '../../components/exception/NotFoundPage';
import Payment from '../../components/payment/Payment';
import PaymentResult from '../../components/payment/PaymentResult';
import LoginPage from '../../components/user/LoginPage';
import AppLayout from '../../layouts/AppLayout';
import ProtectedRoute from '../ProtectedRoute';

const AppRouter = () => (
  <AppLayout>
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/paymentResult" component={PaymentResult} />
        <Route exact path="/test" />
        <ProtectedRoute exact path="/" />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </AppLayout>
);

export default AppRouter;
