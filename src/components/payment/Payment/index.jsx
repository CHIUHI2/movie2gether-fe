import './index.css';
import 'antd/dist/antd.css';

import {
  Button, Form, Input, Select,
} from 'antd';
import { useHistory } from 'react-router-dom';
import BookingDetails from '../BookingDetails';

const { Option } = Select;
const Payment = () => {
  const history = useHistory();
  const onFinish = (values) => {
    console.log('Success:', values);
    history.push('/paymentResult');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
    <div>
        <h1 className="payment">Payment</h1>
      </div>
    < BookingDetails/>
      <div>
        <h3>Payment Details</h3>
      </div>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Card Type"
          name="Card Type"
          rules={[
            {
              required: true,
              message: 'Please select your card number!',
            },
          ]}
        >
          <Select defaultValue="Select" style={{ width: 120 }}>
            <Option value="Visa">Visa</Option>
            <Option value="Master">Master</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Card number"
          name="Card number"
          rules={[
            {
              required: true,
              message: 'Please input valid card number!',
            },
          ]}
        >
          <Input type="number" placeholder="#### #### #### ####" />
        </Form.Item>
        <Form.Item
          label="Name"
          name="Name"
          rules={[
            {
              required: true,
              message: 'Please input your Name!',
            },
          ]}
        >
          <Input type="text" placeholder="please input your name here..." />
        </Form.Item>
        <Form.Item
          label="Expiry Date"
          name="Expiry Date"
          rules={[
            {
              required: true,
              message: 'Please input valid expiry date!',
            },
          ]}
        >
          <Input type="number" placeholder="please input expiry date as MM/YY" />
        </Form.Item>
        <Form.Item
          label="CVC"
          name="CVC"
          rules={[
            {
              required: true,
              message: 'Please input valid CVC!',
            },
          ]}
        >
          <Input type="number" placeholder="Please input CVC as ###" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="Pay for card" shape="round">
            Pay for card
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Payment;
