import 'antd/dist/antd.css';

import { Button, Result } from 'antd';
import { useHistory } from 'react-router-dom';

const PaymentResult = () => {
  const history = useHistory();

  const handleBackToHome = () => {
    history.push('/');
  };
  return (
    <>
      <Result
        status="success"
        title="Successfully Purchased"
        subTitle="Order number: 2020182818828182881"
        extra={[
          <Button type="primary" key="console" onClick={handleBackToHome}>
            Back to Home
          </Button>,
          <Button type="primary" key="buy">Purchase Again</Button>,
        ]}
      />
      ,

    </>
  );
};
export default PaymentResult;
