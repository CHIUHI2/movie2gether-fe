import './index.css';

import { WhiteSpace } from 'antd-mobile';

import UserRegistrationForm from '../UserRegistrationForm';

const UserRegistrationPage = () => (
  <div>
    <WhiteSpace />
    <div className="user-registration-title">User Registration</div>
    <WhiteSpace />
    <UserRegistrationForm />
  </div>
);

export default UserRegistrationPage;
