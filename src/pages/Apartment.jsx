import React from 'react';
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../datas/apartments.json';
import Tags from '../components/Tags';
import Host from '../components/Host';
import NotFound from './NotFound';

const Apartment = () => {
  const { id } = useParams();
    const apartment = data.find((data) => data.id === id);
  
    if (!apartment) {
      return <NotFound />;
    }

  return (
    <div className='apartment'>
      <div className='apartment__columnLeft'>
        <h2 className='apartment__columnLeft--title'>{apartment.title}</h2>
        <h3 className='apartment__columnLeft--location'>{apartment.location}</h3>
        <Tags id={id} />
      </div>
      <div className='apartment__columnRight'>
        <Host id={id}/>
        <Rating rating={apartment.rating} />
      </div>
    </div>
  );
};

export default Apartment;
