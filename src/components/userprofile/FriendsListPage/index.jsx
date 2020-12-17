import { DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { Empty, Input } from 'antd';
import { Flex, WhiteSpace, Card, Toast } from 'antd-mobile';
import { useEffect, useState } from 'react';
import { getAllFriends, addFriend, unFriend } from '../../../api/friend';
import useProvideAuth from '../../../hooks/use-provide-auth';

const { Search } = Input;

const FriendsListPage = () => {
  const [user] = useProvideAuth();
  const [usernameInput, setUsernameInput] = useState('');
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    const { id: userId } = user;
    getAllFriends(userId).then((response) => {
      setFriendsList(response.data);
    });
  }, []);

  const handleChange = ({ target: { value } }) => {
    setUsernameInput(value);
  };

  const handleAddFriend = () => {
    const { id: userId } = user;
    addFriend(userId, usernameInput).then(() => {
      Toast.info('Added');
    });
  };

  const handleUnfriend = (friendId) => {
    const { id: userId } = user;
    unFriend(userId, friendId).then(() => {});
  };

  const UnfriendButton = ({ friendId }) => {
    return (
      <div>
        <DeleteOutlined
          onClick={() => {
            handleUnfriend(friendId);
          }}
        />
      </div>
    );
  };

  return (
    <>
      <Flex justify="center">
        <span className="profile-header">Friends List</span>
      </Flex>
      <WhiteSpace />
      <Flex>
        <Search
          placeholder="Input your friend name"
          value={usernameInput}
          prefix={<SearchOutlined />}
          enterButton="Add"
          onChange={handleChange}
          onSearch={handleAddFriend}
        />
      </Flex>
      <WhiteSpace size="xl" />
      {friendsList.length > 0 ? (
        friendsList.map((friend) => (
          <Card>
            <Card.Header title={friend.userName} extra={<UnfriendButton friendId={friend.id} />} />
            <Card.Body>
              <span>{friend.email}</span>
            </Card.Body>
          </Card>
        ))
      ) : (
        <Empty description={"You don't have friends yet"} />
      )}
    </>
  );
};

export default FriendsListPage;
