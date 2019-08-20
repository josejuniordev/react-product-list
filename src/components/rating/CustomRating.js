import React, { memo } from 'react';
import StarIcon from '../products/ProductCard';
import Rating from 'react-rating';

function CustomRating(
  {
    rating = 5,
  }
) {
  return (
    <Rating
      emptySymbol={<StarIcon style={{width: '20px', height: '20px', color: '#ccc'}} />}
      fullSymbol={<StarIcon style={{width: '20px', height: '20px'}} />}
      initialRating={rating}
    />
  );
}

export default CustomRating;
