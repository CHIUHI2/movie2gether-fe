import { InputItem, Toast } from 'antd-mobile';

const UsernameInputItem = ({ form }) => {
  const { getFieldProps, getFieldError } = form;

  const validateUsername = (rule, value, callback) => {
    if (value && value.length >= 8) {
      callback();
    } else {
      callback({ message: 'Please input at least 8 characters for username', field: 'userName' });
    }
  };

  const showValidationErrorToast = () => {
    Toast.hide();
    const errorMessages = getFieldError('userName');
    const content = errorMessages.join(', ');
    Toast.info(content);
  };

  return (
    <InputItem
      {...getFieldProps('userName', {
        rules: [
          { required: true, message: 'Please input username' },
          { validator: validateUsername },
        ],
      })}
      error={!!getFieldError('userName')}
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
