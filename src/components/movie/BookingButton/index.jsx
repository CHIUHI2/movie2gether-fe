import { Button } from 'antd-mobile';
import { PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const BookingButton = ({ movieId }) => {
  const history = useHistory();

  const onClick = () => {
    history.push(`/booking/${movieId}`);
  };

  return (
    <div>
      <Button type="primary" inline size="small" onClick={onClick}>
        <PlusOutlined /> Booking
      </Button>
    </div>
  );
};

export default BookingButton;
