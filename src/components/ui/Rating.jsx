import React from "react";
import { Star, StarHalf } from "lucide-react";

const Rating = ({ rating }) => {
  return (
    <div className='mb-2'>
      {
        <div className='flex -m-1'>
          {new Array(Math.floor(rating)).fill(0).map((_, index) => (
            <Star
              color='#fabf2a'
              className='my-1 fill-[#fabf2a]'
              size='22'
              key={index}
            />
          ))}
          {!Number.isInteger(rating) && (
            <StarHalf
              color='#fabf2a'
              className='my-1 fill-[#fabf2a]'
              size='22'
            />
          )}
        </div>
      }
    </div>
  );
};

export default Rating;
