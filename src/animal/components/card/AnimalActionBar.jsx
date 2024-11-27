import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import CardActionBar from '../../../general/card/CardActionBar';

export default function AnimalActionBar({ animalId, handleDelete, handleEditAnimal }) {
    const actions = [
        {
            onClick: () => handleEditAnimal(animalId), // Call handleEditAnimal when the edit icon is clicked
            icon: <EditIcon />,
        },
        {
            onClick: () => handleDelete(animalId), // Call handleDelete when the delete icon is clicked
            icon: <DeleteIcon />,
        },

    ];

    return <CardActionBar actions={actions} />;
}
