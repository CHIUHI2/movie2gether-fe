import { Flex, Button,List,Pagination} from 'antd-mobile';
import React, { useEffect, useState} from 'react';
import {  getBookingsWithPaginationByUserId } from "../../../api/userprofile";
import ReviewModal from "../../review/ReviewModal";
import { getReview } from "../../../api/review";
// addReview
// updateReview
const {Item} = List;
const {Brief} = Item;
const UserProfilePage = () => {
  // const [user, setUser] = useState({});
  const [sessions,setSessions] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState(null);

  const showModal = () => (
    getReview('5fd77c99e5f7d6417d7abac4', '5fd81ac741ea7016828cfd40').then((response) => {
      setRating(response.data.rating);
      setComment(response.data.comment);
    }).finally(()=>{setOpenModal(true)}))
  ;

  const onClose = () => {
    setOpenModal(false);
  };

  const locale = {
    prevText: 'Prev',
    nextText: 'Next',
  };

  // useEffect(() => {
  //   getUser('5fd81ac741ea7016828cfd391').then((response) => {
  //     setUser(response.data);
  //   })
  // }, [])

    useEffect(() => {
      getBookingsWithPaginationByUserId(0,5,"5fd81ac741ea7016828cfd39").then((response) => {
              console.log(response.data)
              setSessions(response.data)
              })
            
  }, [])

  // useEffect(() => {
  //   if(user.id){
  //     getBookingsWithPaginationByUserId(0,5,"5fd81ac741ea7016828cfd39").then((response) => {
  //       console.log(response.data)
  //       setSessions(response.data)
  //       })
  //     }
  // }, [user.id])

  const GenerateListItem = () => {
    return (
      <div>
      <ReviewModal openModal={openModal} closeModal={onClose}
      rating={rating}
      setRating={setRating}
      comment={comment}
      setComment={setComment}
      movieTitle='Mr Bean'/>
          {
              sessions.map((session) =>
              <Item key={session.id} multipleLine arrow="horizontal" onClick={showModal} >
              {session.movieName} <Brief> {session.date}</Brief>
            </Item>
              )
          }
      </div>
  );
  }

  const PaginationItem = () => {
    return (
      <Pagination total={5} current={1} locale={locale} />
    );
  }
    return (
      <>
       <div>
       <Flex justify="center">User Profile</Flex>
       <List renderHeader={() => 'User Information'} className="my-list">
        <Item>User Name: <span>a</span></Item>
        <Item>Email: <span>a</span></Item>
        <Item arrow="horizontal" multipleLine onClick={() => {}}>My Friend List </Item>
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
