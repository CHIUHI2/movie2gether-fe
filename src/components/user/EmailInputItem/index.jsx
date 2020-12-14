import { InputItem, Toast } from 'antd-mobile';
import { EMAIL_VALIDATION_REGEX } from '../../../common/constants/regex';

const EmailInputItem = ({ form }) => {
  const { getFieldProps, getFieldError } = form;

  const validateEmail = (rule, value, callback) => {
    const isEmail = value && EMAIL_VALIDATION_REGEX.test(value);
    if (isEmail) {
      callback();
    } else {
      callback({ message: 'Please enter a valid email address', field: 'email' });
    }
  };

  const showValidationErrorToast = () => {
    Toast.hide();
    const errorMessages = getFieldError('email');
    const content = errorMessages.join(', ');
    Toast.info(content);
  };

  return (
    <InputItem
      {...getFieldProps('email', {
        rules: [{ required: true, message: 'Please input email' }, { validator: validateEmail }],
      })}
      error={!!getFieldError('email')}
      onErrorClick={showValidationErrorToast}
      type="text"
      clear
      placeholder="Please input a email"
    >
      E-Mail
    </InputItem>
  );
};

export default EmailInputItem;
