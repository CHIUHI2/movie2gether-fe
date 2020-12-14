import { InputItem, Toast } from 'antd-mobile';
import { PASSWORD_VALIDATION_REGEX } from '../../../common/constants/regex';

const PasswordInputItem = ({ form }) => {
  const { getFieldProps, getFieldError } = form;

  const validatePassword = (rule, value, callback) => {
    const isStrongPassword = value && PASSWORD_VALIDATION_REGEX.test(value);
    if (isStrongPassword) {
      callback();
    } else {
      callback({
        message:
          'Minimum 8 charaters, at lease one uppercase letter, one lowercase letter and one number',
        field: 'password',
      });
    }
  };

  const showValidationErrorToast = () => {
    Toast.hide();
    const errorMessages = getFieldError('password');
    const content = errorMessages.join(', ');
    Toast.info(content);
  };

  return (
    <>
      <InputItem
        {...getFieldProps('password', {
          rules: [
            { required: true, message: 'Please input password' },
            { validator: validatePassword },
          ],
        })}
        error={!!getFieldError('password')}
        onErrorClick={showValidationErrorToast}
        type="password"
        clear
        placeholder="****"
      >
        Password
      </InputItem>
    </>
  );
};

export default PasswordInputItem;
