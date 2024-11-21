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
            onClick: () => handleFavorite(exhibitId),
            icon: <FavoriteIcon color={isFavorite ? 'error' : 'disabled'} />,
            active: isFavorite,
        },
        {
            onClick: () => handleEditExhibit(exhibitId),
            icon: <EditIcon />,
        },
        {
            onClick: () => handleDelete(exhibitId),
            icon: <DeleteIcon />,
        },
    ];

    return <CardActionBar actions={actions} />;
}
