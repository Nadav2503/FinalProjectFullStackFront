import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function ExhibitCardActionBar({
    exhibitId,
    handleDelete,
    handleEditExhibit,
    handleFavorite,
    isFavorite,
}) {
    const actions = [
        {

            icon: <FavoriteIcon color={isFavorite ? 'error' : 'disabled'} />,
            active: isFavorite,
        },
        {

            icon: <EditIcon />,
        },
        {

            icon: <DeleteIcon />,
        },
    ];

    return <CardActionBar actions={actions} />;
}
