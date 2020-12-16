import { Flex, Button, List, Pagination } from 'antd-mobile';
import React, { useEffect, useState} from 'react';
import dayjs from 'dayjs';
import { useHistory } from 'react-router-dom';
import { getBookingsWithPaginationByUserId } from '../../../api/userprofile';
import ReviewModal from '../../review/ReviewModal';
import useProvideAuth from '../../../hooks/use-provide-auth';
import "./index.css";

const { Item } = List;
const { Brief } = Item;

const UserProfilePage = () => {
  const [sessions, setSessions] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalMovieTitle, setModalMovieTitle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modalMovieId, setModalMovieId] = useState(null);
  const [user] = useProvideAuth();
  const history = useHistory();
  

  const showModal = (movieTitle, movieId) => {
    setModalMovieTitle(movieTitle);
    setModalMovieId(movieId);
    setOpenModal(true);
  };

  const onClose = () => {
    setOpenModal(false);
  };

  const moveBack = () => {
    history.push('/')
  };

  const locale = {
    prevText: 'Prev',
    nextText: 'Next',
  };

  useEffect(() => {
    getBookingsWithPaginationByUserId(0,5,user.id).then((response) => {
      if(response.data.totalPages <= 0){
        setTotalPages(1);
      }else {
        setTotalPages(response.data.totalPages);
      }
      setSessions(response.data.content)
       })
     
  }, [])

  const changePage = (pageNum) => {
    setCurrentPage(pageNum);
    getBookingsWithPaginationByUserId(pageNum-1,5,user.id).then((response) => {
      setSessions(response.data.content)
       })
  }

  const DisplayNoBookingHistory = () => {
    if (sessions.length <= 0){
      return (
        <div className="no-booking-history">You have not booked any movie yet</div>
        )
    }
    return <div />
  }

  const getFormattedReleaseDate = (dateTime) => {
    return dayjs(dateTime).format('YYYY-MM-DD');
  };

  const GenerateListItem = () => {
    return (
      <div>
        {
          openModal && 
         <ReviewModal
          openModal={openModal}
          closeModal={onClose}
          movieTitle={modalMovieTitle}
          movieId={modalMovieId}
          userId={user.id}
          />
        }
        {sessions.map((session) => (
          <Item key={session.sessionDetail.id} multipleLine arrow="horizontal" onClick={() => showModal(session.sessionDetail.movie.title, session.sessionDetail.movie.id)}>
            {session.sessionDetail.movie.title} <Brief> {getFormattedReleaseDate(session.sessionDetail.endTime)}</Brief>
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
      <Button onClick={moveBack}>Back</Button>
    </>
  );
};

export default UserProfilePage;
