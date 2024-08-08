import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../datas/apartments.json';
import NotFound from '../pages/NotFound';

const EquipmentsAppart = () => {

    const { id  } = useParams();
    const equipmentsData = data.find((data) => data.id === id);
    const equipments = equipmentsData.equipments;

    const equipmentsList = equipments.map((index) => 
        <p key={index}>{index}</p>
    )

    if (!equipmentsData) {
        return <NotFound />
    }

    return (
        <div>
            {equipmentsList}
        </div>
    );
};

export default EquipmentsAppart;