import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardActionBar from '../../../general/card/CardActionBar';

export default function AnimalActionBar({ animalId, handleDelete, handleEditAnimal, handleFavoriteToggle, isLiked }) {
    const actions = [];

    if (handleEditAnimal) {
        actions.push({
            onClick: () => handleEditAnimal(animalId),
            icon: <EditIcon />,
        });
    }

    if (handleDelete) {
        actions.push({
            onClick: () => handleDelete(animalId),
            icon: <DeleteIcon />,
        });
    }

    actions.push({
        onClick: () => handleFavoriteToggle(animalId),
        icon: (
            <FavoriteIcon
                sx={{
                    color: isLiked ? 'red' : 'gray',
                }}
            />
        ),
    });

    return <CardActionBar actions={actions} />;
}
