import { Image } from 'antd';
import icon from './icon.png';
import './index.css';

const BookingDetails = () => (
  <div>
    <div>
      <h3>
        <u>Booking Details </u>
        <Image className="image"
      width={100}
      src={icon}
    />
      </h3>
      <p>
        <b>Movie: </b>
      </p>
      <p>
        <b>Cinema:</b>
      </p>
      <p>
        <b>Date:</b>
      </p>
      <p>
        <b>Time:</b>
      </p>
    </div>
  </div>
);
export default BookingDetails;
