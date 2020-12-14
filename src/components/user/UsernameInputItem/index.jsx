import { InputItem } from 'antd-mobile';

const UsernameInputItem = ({ form }) => {
  const { getFieldProps, getFieldError } = form;

  const validateUsername = (rule, value, callback) => {
    if (value && value.length >= 8) {
      callback();
    } else {
      callback(new Error('At lease 8 characters for username'));
    }
  };

  return (
    <InputItem
      {...getFieldProps('username', {
        rules: [
          { required: true, message: 'Please input username' },
          { validator: validateUsername },
        ],
      })}
      error={!!getFieldError('username')}
      onErrorClick={() => {
        alert(getFieldError('username'));
      }}
      type="text"
      clear
      placeholder="Please input a username"
    >
      Username
    </InputItem>
  );
};

export default UsernameInputItem;
