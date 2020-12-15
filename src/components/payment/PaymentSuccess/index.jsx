import 'antd/dist/antd.css';
import { useState } from 'react';
import { Button, Result } from 'antd';
import { useHistory } from 'react-router-dom';
import './index.css';

const PaymentSuccess = () => {
  const [value] = useState(Math.random() * 99999999999999999 + 1);

  const history = useHistory();

  const handleBackToHome = () => {
    history.push('/');
  };
  return (
    <>
      <Result className="result" status="success" title="Successfully Purchased" />

      <div className="order">
        <p id="order">Order number:{value} </p>
        <Button className="button" type="primary" key="console" onClick={handleBackToHome}>
          Back to Home
        </Button>
        <Button className="button" type="primary" key="buy">
          Purchase Again
        </Button>
      </div>
    </>
  );
};
export default PaymentSuccess;
