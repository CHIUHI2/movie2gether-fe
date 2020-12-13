import { Button, InputItem } from 'antd-mobile';

const LoginPage = () => (
  <div>
    <InputItem type="text" clear>
      Username
    </InputItem>
    <InputItem type="Password" clear>
      Password
    </InputItem>
    <Button>Login</Button>
  </div>
);

export default LoginPage;
