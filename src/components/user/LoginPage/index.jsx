import './index.css';
import { WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';

const LoginPage = () => {
  const RedirectRegistrationButton = () => (
    <>
      <Link to="/user/register">Register here</Link>
    </>
  );

  return (
    <div>
      <WhiteSpace />
      <div className="user-login-title">Login</div>
      <WhiteSpace />
      <LoginForm />
      <WhiteSpace />
      <span>
        Don&apos;t have an account? <RedirectRegistrationButton />
      </span>
    </div>
  );
};

export default LoginPage;
