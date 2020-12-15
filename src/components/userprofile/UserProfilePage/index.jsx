import { Flex, Button,List,Pagination} from 'antd-mobile';
import React, { useEffect, useState} from 'react';
import { getUser, getSessionBySessionId } from '../../../api/userprofile/index';

const UserProfilePage = () => {
  const {Item} = List;
  const {Brief} = Item;
  const [user, setUser] = useState({}); 
  const [sessions,setSessions] = useState([]); 

  const locale = {
    prevText: 'Prev',
    nextText: 'Next',
  };

  useEffect(() => {
    getUser('1').then((response) => {
      setUser(response.data);
    })
      
  }, [])

  useEffect(() => {
    if(user.id){
     getSessionBySessionId(user.id).then((response) => {
          setSessions(response.data)
        })
      }
  }, [user.id])

  const GenerateListItem = () => {
    return (
      <div>
          {
              sessions.map((session) =>
              <Item key={session.id} multipleLine arrow="horizontal" onClick={() => {}} >
              {session.movieName} <Brief> {session.date}</Brief>
            </Item>
              )
          }
      </div>
  );
  }

    return (
      <>
       <div>
       <Flex justify="center">User Profile</Flex>
       <List renderHeader={() => 'User Information'} className="my-list">
        <Item extra="">User Name: <span>{user.userName}</span></Item>
        <Item extra="">Email: <span>{user.email}</span></Item>
        <Item extra="" arrow="horizontal" multipleLine onClick={() => {}}>My Friend List </Item>
      </List>
      <List renderHeader={() => 'Movie History'} className="my-list">
        <GenerateListItem />
      </List>
       </div>
       <Pagination total={5} current={1} locale={locale} />
       <Button>Back</Button>
      </>
    );
  };
  
  export default UserProfilePage;