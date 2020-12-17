import './index.css';
import { Button, Result } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import _ from 'lodash';

const PaymentSuccess = () => {
  const location = useLocation();
  const history = useHistory();
  const orderIds = _.get(location, 'state.orderIds', '');

  const handleBackToHome = () => {
    history.push('/');
  };

  return (
    <>
      <Result className="result" status="success" title="Successfully Purchased" />
      <div className="order">
        <p id="order">Order numbers:{orderIds.join(", ")} </p>
        <Button className="button" type="primary" key="console" onClick={handleBackToHome}>
          Back to Home
        </Button>
      </div>
    </>
  );
};
export default PaymentSuccess;
