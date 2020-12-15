import { List, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { signInUser } from '../../../api/auth';
import PasswordInputItem from '../PasswordInputItem';
import UsernameInputItem from '../UsernameInputItem';

const LoginForm = ({ form }) => {
  const validateForm = async () => {
    try {
      await form.validateFields({ force: true });
      return true;
    } catch (err) {
      Toast.info('Please complete the form');
      return false;
    }
  };

  const handleSubmit = async () => {
    const validateResult = await validateForm();
    if (validateResult) {
      const formValues = form.getFieldsValue();
      signInUser(formValues)
        .then((response) => {
          Toast.info(response.data);
        })
        .catch((err) => {
          Toast.info(err.response.data);
        });
    }
  };

  return (
    <List align="top">
      <UsernameInputItem form={form} />
      <PasswordInputItem form={form} />
      <List.Item>
        <Button
          type="primary"
          onClick={async () => {
            await handleSubmit();
          }}
        >
          Login
        </Button>
      </List.Item>
    </List>
  );
};

export default createForm()(LoginForm);
