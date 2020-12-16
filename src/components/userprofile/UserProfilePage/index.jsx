import { Flex, Button, List, Pagination } from 'antd-mobile';
import React, { useEffect, useState } from 'react';
import { getBookingsWithPaginationByUserId } from '../../../api/userprofile';
import ReviewModal from '../../review/ReviewModal';
import "./index.css";

const { Item } = List;
const { Brief } = Item;
const UserProfilePage = () => {
  const [sessions, setSessions] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalMovieTitle, setModalMovieTitle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const showModal = (movieTitle) => {
    setOpenModal(true);
    setModalMovieTitle(movieTitle);
  };

  const onClose = () => {
    setOpenModal(false);
  };

  const locale = {
    prevText: 'Prev',
    nextText: 'Next',
  };

  useEffect(() => {
    getBookingsWithPaginationByUserId(0,5,"5fd81ac741ea7016828cfd39").then((response) => {
      setTotalPages(response.data.totalPages);
      setSessions(response.data.content)
       })
     
  }, [])

  const changePage = (pageNum) => {
    setCurrentPage(pageNum);
    getBookingsWithPaginationByUserId(pageNum-1,5,"5fd81ac741ea7016828cfd39").then((response) => {
      setSessions(response.data.content)
       })
  }

  const DisplayNoBookingHistory = () => {
    if (sessions.length <=0){
      return (
        <div className="no-booking-history">You have not booked any movie yet</div>
        )
    }
    return <div />
  }

  const GenerateListItem = () => {
    return (
      <div>
         <ReviewModal
          openModal={openModal}
          closeModal={onClose}
          movieTitle={modalMovieTitle}
        />
        {sessions.map((session) => (
          <Item key={session.sessionDetail.id} multipleLine arrow="horizontal" onClick={() => showModal(session.sessionDetail.movie.title)}>
            {session.sessionDetail.movie.title} <Brief> {session.sessionDetail.endTime}</Brief>
          </Item>
        ))}
        <DisplayNoBookingHistory />
      </div>
    );
  };

  const PaginationItem = () => {
    return <Pagination total={totalPages} current={currentPage} locale={locale} onChange={changePage}/>;
  };
  return (
    <>
      <div>
        <Flex justify="center">User Profile</Flex>
        <List renderHeader={() => 'User Information'} className="my-list">
          <Item>
            User Name: <span>a</span>
          </Item>
          <Item>
            Email: <span>a</span>
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

export default UserProfilePage;
