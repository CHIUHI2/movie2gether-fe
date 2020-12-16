import { List } from 'antd-mobile';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import ReviewModal from '../../review/ReviewModal';

const { Item } = List;
const { Brief } = Item;

const MovieHistory = ({userId, sessions}) => {
    const [openModal, setOpenModal] = useState(false);
    const [modalMovie, setmodalMovie] = useState(null);
    
    const showModal = (movie) => {
        setmodalMovie(movie);
        setOpenModal(true);
      };
    
    const onClose = () => {
        setOpenModal(false);
      };

    const getFormattedReleaseDate = (dateTime) => {
        return dayjs(dateTime).format('YYYY-MM-DD');
    };

    return(
        <List renderHeader={() => 'Movie History'} className="my-list">
         {
          openModal && 
         <ReviewModal
          openModal={openModal}
          closeModal={onClose}
          movie={modalMovie}
          userId={userId}
          />
        }
        {sessions.map((session) => (
          <Item key={session.sessionDetail.id} multipleLine arrow="horizontal" onClick={() => showModal(session.sessionDetail.movie)}>
            {session.sessionDetail.movie.title} <Brief> {getFormattedReleaseDate(session.sessionDetail.endTime)}</Brief>
          </Item>
        ))}
        </List>
    )
}

export default MovieHistory;