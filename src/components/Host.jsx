import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../datas/apartments.json';
import NotFound from '../pages/NotFound';

const Host = () => {

    const { id } = useParams();
    const host = data.find((data) => data.id === id);

    if (!host) {
        return <NotFound />
    }

    return (
        <div className='host'> 
            <div className='host__name'>{host.host.name}</div>
            <img className='host__img'src={host.host.picture}  alt={host.host.name}></img>
         </div>
        
    );
};

export default Host;