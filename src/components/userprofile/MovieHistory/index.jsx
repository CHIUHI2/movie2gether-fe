import { List } from 'antd-mobile';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import ReviewModal from '../../review/ReviewModal';

const { Item } = List;
const { Brief } = Item;

const MovieHistory = ({userId, sessions}) => {
    const [openModal, setOpenModal] = useState(false);
    const [modalMovie, setmodalMovie] = useState(null);
    const [modalSessionId, setModalSessionId] = useState(null);
    const showModal = (movie, sessionId) => {
        setmodalMovie(movie);
        setModalSessionId(sessionId);
        setOpenModal(true);
      };
    
    const onClose = () => {
        setOpenModal(false);
      };

    const getFormattedReleaseDate = (dateTime) => {
        return dayjs(dateTime).format('YYYY-MM-DD');
    };


    const GenerateHistory = () => {
      
        return (
        <List renderHeader={() => 'Movie History'} className="my-list">
         {
          openModal && 
         <ReviewModal
          openModal={openModal}
          closeModal={onClose}
          movie={modalMovie}
          userId={userId}
          sessionId={modalSessionId}
          />
        }
        {sessions.map((session) => (
          <Item key={session.id} multipleLine arrow="horizontal" onClick={() => showModal(session.sessionDetail.movie, session.sessionDetail.id)}>
            {session.sessionDetail.movie.title} <Brief> {getFormattedReleaseDate(session.sessionDetail.endTime)}</Brief>
          </Item>
        ))}
        </List>
        )
    }
  
    useEffect(() => {
      GenerateHistory();
       
    }, [])

    return(
        <GenerateHistory />
    )
}

export default MovieHistory;