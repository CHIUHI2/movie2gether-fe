import { InputItem, Toast } from 'antd-mobile';

const UsernameInputItem = ({ form }) => {
  const { getFieldProps, getFieldError } = form;

  const validateUsername = (rule, value, callback) => {
    if (value && value.length >= 8) {
      callback();
    } else {
      callback({ message: 'Please input at least 8 characters for username', field: 'username' });
    }
  };

  const showValidationErrorToast = () => {
    Toast.hide();
    const errorMessages = getFieldError('username');
    const content = errorMessages.join(', ');
    Toast.info(content);
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
      onErrorClick={showValidationErrorToast}
      type="text"
      clear
      placeholder="Please input a username"
    >
      Username
    </InputItem>
  );
};

export default UsernameInputItem;
