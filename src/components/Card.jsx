import React from 'react';


const Card = ({img, caption}) => {
    return (
    <div>
        <img className='gallery__img' src={img} alt={caption} />
        <h2 className='gallery__caption'>{caption}</h2>
    </div>
    );
}

export default Card;