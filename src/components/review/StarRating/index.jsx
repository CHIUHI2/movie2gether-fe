import React from 'react';
import './index.css';
import { StarFilled } from '@ant-design/icons';

const StarRating = ({rating, setRating}) => {

  return (
    <div>
      <span>Rating: </span>
      {[...Array(5)].map((star, index) => {
        const ratingvalue = index + 1;

        return (

              <StarFilled
                className="star"
                style={ ratingvalue <= rating ? {color: "#ffc107"}: {color:"#e4e5e9"}}
                onClick={()=>setRating(ratingvalue)}
                />
        );
      })}
    </div>
  );
};

export default StarRating;
