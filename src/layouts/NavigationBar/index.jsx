import './index.css';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import { NavBar } from 'antd-mobile';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { useEffect, useState } from 'react';
import _ from 'lodash';
import APP_NAME from '../../common/constants';

const UserMenu = () => {
  const location = useLocation();
  const history = useHistory();
  const [loginStatus, setLoginStatus] = useState(
    !_.isEmpty(window.localStorage.getItem('backapin_access_token')),
  );

  useEffect(() => {
    setLoginStatus(!_.isEmpty(window.localStorage.getItem('backapin_access_token')));
  }, [location.pathname]);

  return (
    <>
      {loginStatus ? (
        <div
          onClick={() => {
            history.push('/userprofile');
          }}
        >
          <UserOutlined />
        </div>
      ) : (
        <Link to="/login">
          <span className="sign-in-btn-text">Sign in</span>
        </Link>
      )}
    </>
  );
};

const NavigationBar = () => {
  const history = useHistory();

  const HomeButton = () => (
    <div
      onClick={() => {
        history.push('/');
      }}
    >
      <HomeOutlined />
    </div>
  );

  return (
    <NavBar mode="dark" leftContent={<HomeButton />} rightContent={<UserMenu />}>
      {APP_NAME}
    </NavBar>
  );
};

export default NavigationBar;
