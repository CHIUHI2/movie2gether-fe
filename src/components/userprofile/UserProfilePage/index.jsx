import { Button,List,Pagination} from 'antd-mobile';


const UserProfilePage = () => {
  const {Item} = List;
  const {Brief} = Item;
  const locale = {
    prevText: 'Prev',
    nextText: 'Next',
  };

const GenerateListItem = () => {
  const initArraySize = Array.from(Array(3).keys());

  return (
    <div>
        {
            initArraySize.map((values) =>
            <Item key={values} arrow="horizontal" onClick={() => {}} >
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
       <List renderHeader={() => 'User Information'} className="my-list">
        <Item extra="">User Name: </Item>
        <Item extra="">Email: </Item>
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