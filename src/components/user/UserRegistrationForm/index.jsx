import { Button, List, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { useHistory } from 'react-router-dom';
import UsernameInputItem from '../UsernameInputItem';
import EmailInputItem from '../EmailInputItem';
import PasswordInputItem from '../PasswordInputItem';
import { registerUser } from '../../../api/auth';
import useProvideAuth from '../../../hooks/use-provide-auth';

const UserRegistrationForm = ({ form }) => {
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
      registerUser(formValues)
        .then((response) => {
          signIn(response.data);
          history.push('/');
        })
        .catch((err) => {
          if (err.response && err.response.data && err.response.data.message) {
            Toast.info(err.response.data.message);
          } else {
            Toast.info('Error when registering user');
          }
        });
    }
  };

  return (
    <List align="top">
      <UsernameInputItem form={form} />
      <EmailInputItem form={form} />
      <PasswordInputItem form={form} />
      <List.Item>
        <Button type="primary" onClick={handleSubmit}>
          Register
        </Button>
      </List.Item>
    </List>
  );
};
export default createForm()(UserRegistrationForm);
