import { Result, Button, Typography } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import { CloseCircleOutlined } from '@ant-design/icons';
import _ from 'lodash';

const { Paragraph, Text } = Typography;

const PaymentFailed = () => {
  const history = useHistory();
  const location = useLocation();
  const sessionId = _.get(location, 'state.sessionId', '');
  const seatNumber = _.get(location, 'state.seatNumber', '');
  const movieId = _.get(location, 'state.movieId', '');

  const handleBackToHome = () => {
    history.push('/');
  };

  const handlePurchaseAgain = () => {
    history.push(`/booking/${movieId}`, {
      sessionId,
      seatNumber,
    });
  };

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
