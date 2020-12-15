import { Button, List, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import UsernameInputItem from '../UsernameInputItem';
import EmailInputItem from '../EmailInputItem';
import PasswordInputItem from '../PasswordInputItem';

const UserRegistrationForm = ({ form }) => {
  const handleSubmit = () => {
    form.validateFields({ force: true }, (error) => {
      if (error) {
        Toast.info('Please complete the form');
      }
    });
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
