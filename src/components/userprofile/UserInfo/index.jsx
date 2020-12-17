import { List } from 'antd-mobile';
import useProvideAuth from '../../../hooks/use-provide-auth';

const { Item } = List;

const UserInfoItem = () => {
    const [user] = useProvideAuth();
    return(
        <List renderHeader={() => 'User Information'} className="my-list">
        <Item>
        User Name: <span>{user.userName}</span>
        </Item>
        <Item>
          Email: <span>{user.email}</span>
        </Item>
        <Item arrow="horizontal" multipleLine onClick={() => {}}>
          My Friend List
        </Item>
      </List>
    )
}

export default UserInfoItem;