import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardActionBar from '../../../general/card/CardActionBar';

export default function ReviewActionBar({ reviewId, handleEdit, handleDelete, handleLike, isLiked }) {
    const actions = [];

    if (handleEdit) {
        actions.push({
            onClick: () => handleEdit(reviewId),
            icon: <EditIcon />,
        });
    }

    if (handleDelete) {
        actions.push({
            onClick: () => handleDelete(reviewId),
            icon: <DeleteIcon />,
        });
    }

    actions.push({
        onClick: () => handleLike(reviewId),
        icon: <FavoriteIcon style={{ color: isLiked ? 'red' : 'gray' }} />
        ,
    });

    return <CardActionBar actions={actions} />;
}
