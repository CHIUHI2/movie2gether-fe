import './index.css';
import { Button, Form, Input } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import { InfoCircleOutlined } from '@ant-design/icons';
import { SegmentedControl, WingBlank } from 'antd-mobile';
import { useState } from 'react';
import _ from 'lodash';
import BookingDetails from '../BookingDetails';
import { createBooking } from '../../../api/booking';
import useProvideAuth from '../../../hooks/use-provide-auth';
import {
  validateCreditCardNumber,
  validateCVC,
  validateExpiryDate,
  validateName,
} from '../../../common/utils/payment-form-validator';
import { VISA_TYPE_MATCH_REGEX, MASTER_TYPE_MATCH_REGEX } from '../../../common/constants/regex';

const Payment = () => {
  const history = useHistory();
  const location = useLocation();
  const [type, setType] = useState(-1);
  const [user] = useProvideAuth();
  const { id: userId } = user;
  const sessionId = _.get(location, 'state.sessionId', '');
  const seatNumbers = _.get(location, 'state.seatNumber', '');

  const onFinish = () => {
    createBooking(userId, sessionId, seatNumbers)
      .then((response) => {
        history.push('/paymentSuccess', { orderId: response.data.id });
      })
      .catch(() => {
        history.push('/paymentFailed', { sessionId, seatNumber: seatNumbers });
      });
  };

  const updateCardType = (event) => {
    if (VISA_TYPE_MATCH_REGEX.test(event.target.value)) {
      setType(0);
    } else if (MASTER_TYPE_MATCH_REGEX.test(event.target.value)) {
      setType(1);
    } else {
      setType(-1);
    }
  };

  return (
    <>
      <div>
        <h1 className="payment">Payment</h1>
      </div>
      <BookingDetails sessionId={sessionId} seatNumber={seatNumbers} />
      <div>
        <h3>Payment Details</h3>
      </div>
      <WingBlank size="lg" className="sc-example">
        <p className="sub-title">Card Type</p>
        <SegmentedControl values={['Visa', 'Master']} selectedIndex={type} disabled />
      </WingBlank>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Card number"
          name="cardNum"
          tooltip={{
            title: '16 valid numbers only',
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            {
              required: true,
              message: 'Please input valid card number!',
            },
            validateCreditCardNumber,
          ]}
        >
          <Input
            type="text"
            name="cardNum"
            maxLength="16"
            placeholder="#### #### #### ####"
            onChange={updateCardType}
          />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          tooltip={{
            title: 'Name displayed on the credit card ',
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            {
              required: true,
              message: 'Please input your Name!',
            },
            validateName,
          ]}
        >
          <Input type="text" placeholder="please input your name here..." />
        </Form.Item>
        <Form.Item
          label="Expiry Date"
          name="date"
          tooltip={{
            title: 'valid date only e.g 02/2020',
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            {
              required: true,
              message: 'Please input valid expiry date!',
            },
            validateExpiryDate,
          ]}
        >
          <Input type="text" maxLength="7" placeholder="please input expiry date as MM/YYYY" />
        </Form.Item>
        <Form.Item
          label="CVC"
          name="cvc"
          tooltip={{
            title: '3 valid numbers only',
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            {
              required: true,
              message: 'Please input valid CVC!',
            },
            validateCVC,
          ]}
        >
          <Input type="text" maxLength="3" placeholder="Please input CVC as ###" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="Pay for card" shape="round">
            Pay by card
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Payment;
