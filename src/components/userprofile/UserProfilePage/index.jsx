import { Flex, Button, Pagination } from 'antd-mobile';
import React, { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { getBookingsWithPaginationByUserId } from '../../../api/userprofile';
import useProvideAuth from '../../../hooks/use-provide-auth';
import UserInfoItem from '../UserInfo';
import MovieHistory from '../MovieHistory';
import NoBookingHistoryRemind from '../NoHistoryReminder';
import "./index.css";

const UserProfilePage = () => {
  const [sessions, setSessions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [user] = useProvideAuth();
  const history = useHistory();

  const moveBack = () => {
    history.goBack()
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

  const PaginationItem = () => {
    return <Pagination total={totalPages} current={currentPage} locale={locale} onChange={changePage}/>;
  };
  
  return (
    <>
      <Flex justify="center"><span className="profile-header">User Profile</span></Flex>
      <UserInfoItem/>
      <MovieHistory userId={user.id} sessions={sessions}/>
      <NoBookingHistoryRemind sessions={sessions}/>
      <PaginationItem />
      <Button onClick={moveBack} type="primary">Back</Button>
    </>
  );
};

export default UserProfilePage;
