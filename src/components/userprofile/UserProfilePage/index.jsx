import { Flex, Button,List,Pagination} from 'antd-mobile';
import React, { useEffect, useState} from 'react';
import { getUser } from '../../../api/userprofile/index';

const UserProfilePage = () => {
  const {Item} = List;
  const {Brief} = Item;
  const [user, setUser] = useState({userName: '', email:''}); 
 
  const locale = {
    prevText: 'Prev',
    nextText: 'Next',
  };

  useEffect(() => {
    getUser('1').then((response) => {
      setUser(response.data);
    })
  }, [])

const GenerateListItem = () => {
  const initArraySize = Array.from(Array(5).keys());
  
  return (
    
    <div>
        {

            initArraySize.map((values) =>
            <Item key={values} multipleLine arrow="horizontal" onClick={() => {}} >
            values <Brief> Date</Brief>
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