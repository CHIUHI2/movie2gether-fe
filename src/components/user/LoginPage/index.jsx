import './index.css';
import { WhiteSpace } from 'antd-mobile';
import LoginForm from '../LoginForm';

const LoginPage = () => (
  <div>
    <WhiteSpace />
    <div className="user-login-title">Login</div>
    <WhiteSpace />
    <LoginForm />
  </div>
);

export default LoginPage;
