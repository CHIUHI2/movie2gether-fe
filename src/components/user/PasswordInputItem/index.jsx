import { InputItem } from 'antd-mobile';
import { PASSWORD_VALIDATION_REGEX } from '../../../common/constants/regex';

const PasswordInputItem = ({ form }) => {
  const { getFieldProps, getFieldError } = form;

  const validatePassword = (rule, value, callback) => {
    const isStrongPassword = value && PASSWORD_VALIDATION_REGEX.test(value);
    if (isStrongPassword) {
      callback();
    } else {
      callback(
        new Error(
          'Minimum 8 charaters, at lease one uppercase letter, one lowercase letter and one number',
        ),
      );
    }
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
        onErrorClick={() => {
          alert(getFieldError('password'));
        }}
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
