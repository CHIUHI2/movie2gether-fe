import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { NavBar } from 'antd-mobile';

import APP_NAME from '../../common/constants';

const NavigationBar = () => (
  <NavBar mode="dark" leftContent={<MenuOutlined />} rightContent={<UserOutlined />}>
    {APP_NAME}
  </NavBar>
);

export default NavigationBar;
