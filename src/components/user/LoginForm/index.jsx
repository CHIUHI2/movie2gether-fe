import { List, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { useHistory } from 'react-router-dom';
import { signInUser } from '../../../api/auth';
import useProvideAuth from '../../../hooks/use-provide-auth';
import PasswordInputItem from '../PasswordInputItem';
import UsernameInputItem from '../UsernameInputItem';

const LoginForm = ({ form }) => {
  const history = useHistory();
  const [, , signIn] = useProvideAuth();

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
          const userResponse = response.data;
          signIn(userResponse);
          history.push('/');
        })
        .catch((err) => {
          if (err.response && err.response.data && err.response.data.message) {
            Toast.info(err.response.data.message);
          } else {
            Toast.info('Error logging in');
          }
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
