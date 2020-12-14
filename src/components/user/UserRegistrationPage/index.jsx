import './index.css';

import { WhiteSpace } from 'antd-mobile';

import { Link } from 'react-router-dom';
import UserRegistrationForm from '../UserRegistrationForm';

const UserRegistrationPage = () => {
  const RedirectLoginButton = () => (
    <>
      <Link to="/login">Login instead</Link>
    </>
  );

  return (
    <div>
      <WhiteSpace />
      <div className="user-registration-title">User Registration</div>
      <WhiteSpace />
      <UserRegistrationForm />
      <WhiteSpace />
      <span>
        <RedirectLoginButton />
      </span>
    </div>
  );
};

export default UserRegistrationPage;
