import React from 'react';
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../datas/apartments.json';
import Tags from '../components/Tags';
import Host from '../components/Host';
import NotFound from './NotFound';
import Collapse from '../components/Collapse';
import DescriptionAppart from '../components/DescriptionAppart';
import EquipmentsAppart from '../components/EquipmentsAppart';
import Slideshow from '../components/Slideshow';

const Apartment = () => {
    const { id } = useParams();
    const apartment = data.find((data) => data.id === id);
  
    if (!apartment) {
      return <NotFound />;
    }

  return (
    <div>
       <Slideshow images={apartment.pictures} />
      <div className='apartInfos'>
        <div className='apartInfos__left'>
          <h2 className='apartInfos__left--title'>{apartment.title}</h2>
          <h3 className='apartInfos__left--location'>{apartment.location}</h3>
          <Tags id={id} />
        </div>
        <div className='apartInfos__right'>
          <Host id={id}/>
          <Rating rating={apartment.rating} />
        </div>  
      </div>
      <div className='apartCollapse'>
        <Collapse title={"Description"}>
        <DescriptionAppart id={id} />
        </Collapse>
        <Collapse title="Équipements">
        <EquipmentsAppart id={id} />
        </Collapse>
      </div>
    </div>
  );
};

export default Apartment;