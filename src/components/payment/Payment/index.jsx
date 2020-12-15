import './index.css';
import 'antd/dist/antd.css';
import { Button, Form, Input } from 'antd';
import { useHistory } from 'react-router-dom';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Toast, SegmentedControl, WingBlank } from 'antd-mobile';
import { useState } from 'react';
import BookingDetails from '../BookingDetails';

const Payment = () => {
  const [type, setType] = useState('Visa');
  const history = useHistory();
  const checkCardNumber = (event) => {
    const cardNumList = event.target.value.split('');
    if (cardNumList.length > 16) {
      Toast.info('Invalid card number !!!');
    }
  };
  const checkValidCVC = (event) => {
    const cvcCode = event.target.value.split('');
    if (cvcCode.length > 3) {
      Toast.info('Invalid CVC code !!!');
    }
  };
  const checkValidName = (event) => {
    const name = event.target.value;
    const input = /^[A-Za-z- ]+$/;
    if (name !== '' && !input.test(name)) {
      Toast.info('Invalid Name !!!');
    }
  };
  const checkValidDate = (event) => {
    const date = event.target.value;
    const input = /^[A-Za-z-]+$/;
    if (date !== '' && input.test(date)) {
      Toast.info('Invalid date !!!');
    }
  };
  const onFinish = (values) => {
    const cardNumCheck = values.cardNum.split('');
    const cvcCheck = values.cvc.split('');
    let checking = false;
    const inputType=type;
    if (cardNumCheck.length === 16 && cvcCheck.length === 3) {
      if (inputType.type === 'Master' && cardNumCheck[0] === '5') {
        checking = true;
      } else if ((inputType === 'Visa' || inputType.type === 'Visa') && cardNumCheck[0] === '4') {
        checking = true;
      }
    }
    const date = values.date.split('/');
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const currentDate = new Date(year, month);
    const inputDate = new Date(date[1], date[0] - 1);
    if (inputDate < currentDate) {
      alert('Invalid date!!');
    }
    if (checking) {
      history.push('/paymentSuccess');
    } else {
      history.push('/paymentFailed');
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  };
  const onValueChange = (value) => {
     console.log(value);
    setType({ type: value });
  };
  return (
    <>
      <div>
        <h1 className="payment">Payment</h1>
      </div>
      <BookingDetails />
      <div>
        <h3>Payment Details</h3>
      </div>
      <WingBlank size="lg" className="sc-example">
        <p className="sub-title">Card Type</p>
        <SegmentedControl
          values={['Visa', 'Master']}
          onChange={onChange}
          onValueChange={onValueChange}
        />
      </WingBlank>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
          ]}
        >
          <Input
            type="number"
            name="cardNum"
            onChange={checkCardNumber}
            placeholder="#### #### #### ####"
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
          ]}
        >
          <Input
            type="text"
            onChange={checkValidName}
            placeholder="please input your name here..."
          />
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
          ]}
        >
          <Input
            type="text"
            maxLength="7"
            onChange={checkValidDate}
            placeholder="please input expiry date as MM/YYYY"
          />
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
          ]}
        >
          <Input type="number" onChange={checkValidCVC} placeholder="Please input CVC as ###" />
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
