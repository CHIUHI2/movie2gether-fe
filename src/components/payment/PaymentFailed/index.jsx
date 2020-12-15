import { Result, Button, Typography } from 'antd';
import { useHistory } from 'react-router-dom';
import { CloseCircleOutlined } from '@ant-design/icons';

const PaymentFailed = () => {
  const history = useHistory();

  const handleBackToHome = () => {
    history.push('/');
  };
  const handlePurchaseAgain = () => {
    history.push('/payment');
  };
  const { Paragraph, Text } = Typography;

  return (
    <Result
      status="error"
      title="Submission Failed"
      subTitle="Please check and modify payment details before resubmitting."
      extra={[
        <Button type="primary" key="console" onClick={handleBackToHome}>
          Back to Home
        </Button>,
        <Button type="primary" key="buy" onClick={handlePurchaseAgain}>
          Purchase Again
        </Button>,
      ]}
    >
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          The content you submitted may have the following error:
        </Text>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your credit card type does
        not match with your card number !
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your credit card number is
        invalid !
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your CVC number is invalid !
      </Paragraph>
    </Result>
  );
};
export default PaymentFailed;
