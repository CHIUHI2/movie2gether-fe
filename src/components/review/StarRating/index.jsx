import React, {useState} from 'react';
import { StarFilled } from '@ant-design/icons';

const StarRating = () => {
  // later initial is fetch from db, not null
  const [rating, setRating] = useState(null);

  return (
    <div>
      <span>Rating: </span>
      {[...Array(5)].map((star, index) => {
        const ratingvalue = index + 1;

        return (

              <StarFilled
                className="star"
                style={ ratingvalue <= rating ? {color: "#ffc107", fontSize: '30px'}: {color:"#e4e5e9", fontSize: '30px'}}
                onClick={()=>{console.log(ratingvalue); setRating(ratingvalue)}}
                />
        );
      })}
    </div>
  );
};

export default StarRating;
