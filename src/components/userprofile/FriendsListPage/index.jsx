import { DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { Empty, Input } from 'antd';
import { Flex, WhiteSpace, Card } from 'antd-mobile';
import { useEffect, useState } from 'react';
import { getAllFriends, addFriend, unFriend } from '../../../api/users';
import useProvideAuth from '../../../hooks/use-provide-auth';

const { Search } = Input;

const FriendsListPage = () => {
  const [user] = useProvideAuth();
  const [usernameInput, setUsernameInput] = useState('');
  const [friendsList, setFriendsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { id: userId } = user;
    getAllFriends(userId).then((response) => {
      setFriendsList(response.data.friends);
    });
  }, []);

  const handleChange = ({ target: { value } }) => {
    setUsernameInput(value);
  };

  const handleAddFriend = () => {
    const { id: userId } = user;
    setLoading(true);
    addFriend(userId, usernameInput)
      .then((response) => {
        setFriendsList(response.data.friends);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleUnfriend = (friendName) => {
    const { id: userId } = user;
    unFriend(userId, friendName).then((response) => {
      setFriendsList(response.data.friends);
    });
  };

  const UnfriendButton = ({ friendName }) => {
    return (
      <div>
        <DeleteOutlined
          onClick={() => {
            handleUnfriend(friendName);
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
          loading={loading}
        />
      </Flex>
      <WhiteSpace size="xl" />
      {friendsList.length > 0 ? (
        friendsList.map((friend) => (
          <Card key={friend.id}>
            <Card.Header
              title={friend.userName}
              extra={<UnfriendButton friendName={friend.userName} />}
            />
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
