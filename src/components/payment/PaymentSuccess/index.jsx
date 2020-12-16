import './index.css';
import { Button, Result } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import _ from 'lodash';

const PaymentSuccess = () => {
  const location = useLocation();
  const history = useHistory();
  const orderId = _.get(location, 'state.orderId', '');
  const sessionId = _.get(location, 'state.sessionId', '');
  const seatNumber = _.get(location, 'state.seatNumber', '');

  const handleBackToHome = () => {
    history.push('/');
  };

  const handlePurchaseAgain = () => {
    history.push('/payment', {
      sessionId,
      seatNumber,
    });
  };

  return (
    <>
      <Result className="result" status="success" title="Successfully Purchased" />
      <div className="order">
        <p id="order">Order number:{orderId} </p>
        <Button className="button" type="primary" key="console" onClick={handleBackToHome}>
          Back to Home
        </Button>
        <Button className="button" type="primary" key="buy" onClick={handlePurchaseAgain}>
          Purchase Again
        </Button>
      </div>
    </>
  );
};
export default PaymentSuccess;
