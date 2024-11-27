import React from 'react';
import EditIcon from '@mui/icons-material/Edit';

import CardActionBar from '../../../general/card/CardActionBar';

export default function AnimalActionBar({ animalId, handleEditAnimal }) {
    const actions = [
        {
            onClick: () => handleEditAnimal(animalId), // Call handleEditAnimal when the edit icon is clicked
            icon: <EditIcon />,
        },

    ];

    return <CardActionBar actions={actions} />;
}
