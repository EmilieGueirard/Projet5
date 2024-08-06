import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating }) => {
    const stars = Array.from({length: 5}).map((value, index)=> (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      color={index < rating ? '#FF6060' : '#E0E0E0'}
    />
  ));

  return <div className='rating'>{stars}</div>;
};

export default Rating;
