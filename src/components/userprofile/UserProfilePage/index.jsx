import { Flex, Button, List, Pagination } from 'antd-mobile';
import React, { useEffect, useState } from 'react';
import { getUser, getSessionBySessionId } from '../../../api/userprofile';
import ReviewModal from '../../review/ReviewModal';

const { Item } = List;
const { Brief } = Item;
const UserProfilePage = () => {
  const [user, setUser] = useState({});
  const [sessions, setSessions] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  const onClose = () => {
    setOpenModal(false);
  };

  const locale = {
    prevText: 'Prev',
    nextText: 'Next',
  };

  useEffect(() => {
    getUser('1').then((response) => {
      setUser(response.data);
    });
  }, []);

  useEffect(() => {
    if (user.id) {
      getSessionBySessionId(user.id).then((response) => {
        setSessions(response.data);
      });
    }
  }, [user.id]);

  const GenerateListItem = () => {
    return (
      <div>
        <ReviewModal
          openModal={openModal}
          closeModal={onClose}
          movieTitle="Mr Bean"
        />
        {sessions.map((session) => (
          <Item key={session.id} multipleLine arrow="horizontal" onClick={showModal}>
            {session.movieName} <Brief> {session.date}</Brief>
          </Item>
        ))}
      </div>
    );
  };

  const PaginationItem = () => {
    return <Pagination total={5} current={1} locale={locale} />;
  };
  return (
    <>
      <div>
        <Flex justify="center">User Profile</Flex>
        <List renderHeader={() => 'User Information'} className="my-list">
          <Item>
            User Name: <span>{user.userName}</span>
          </Item>
          <Item>
            Email: <span>{user.email}</span>
          </Item>
          <Item arrow="horizontal" multipleLine onClick={() => {}}>
            My Friend List{' '}
          </Item>
        </List>
        <List renderHeader={() => 'Movie History'} className="my-list">
          <GenerateListItem />
        </List>
      </div>
      <PaginationItem />
      <Button>Back</Button>
    </>
  );
};
// todo pagination to constant
export default UserProfilePage;
