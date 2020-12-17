import { List } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import useProvideAuth from '../../../hooks/use-provide-auth';

const { Item } = List;

const UserInfoItem = () => {
  const [user] = useProvideAuth();
  const history = useHistory();
  return (
    <List renderHeader={() => 'User Information'} className="my-list">
      <Item>
        User Name: <span>{user.userName}</span>
      </Item>
      <Item>
        Email: <span>{user.email}</span>
      </Item>
      <Item
        arrow="horizontal"
        multipleLine
        onClick={() => {
          history.push('/friends');
        }}
      >
        My Friend List
      </Item>
    </List>
  );
};

export default UserInfoItem;
