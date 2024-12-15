import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardActionBar from '../../../general/card/CardActionBar';

export default function ReviewActionBar({ reviewId, handleEdit, handleDelete, handleLike, likedReviews }) {
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

    // Determine if the review is liked
    const isLiked = likedReviews.includes(reviewId);

    actions.push({
        onClick: () => handleLike(reviewId),
        icon: <FavoriteIcon color={isLiked ? "secondary" : "action"} />,
    });

    return <CardActionBar actions={actions} />;
}
