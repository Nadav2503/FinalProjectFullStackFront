import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardActionBar from '../../../general/card/CardActionBar';
import ROUTES from '../../../routers/routerModel';
import CommentIcon from '@mui/icons-material/Comment';
import { useNavigate } from 'react-router-dom';

export default function AnimalActionBar({
    animalId,
    handleDelete,
    handleEditAnimal,
    handleFavoriteToggle,
    isLiked,
    canEditOrDelete,
    canWriteReview,
    canLike
}) {
    const actions = [];
    const navigate = useNavigate();


    // Add edit action if the user is admin
    if (canEditOrDelete) {
        actions.push({
            onClick: () => handleEditAnimal(animalId),
            icon: <EditIcon />,
        });
    }

    // Add delete action if the user is admin
    if (canEditOrDelete) {
        actions.push({
            onClick: () => handleDelete(animalId),
            icon: <DeleteIcon />,
        });
    }

    // Add like action for tier 2 or higher or admin
    if (canLike) {
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
    }

    // Add write review action for tier 3 or higher or admin
    if (canWriteReview) {
        actions.push({
            onClick: () => navigate(`${ROUTES.ADD_REVIEW}?animalId=${animalId}`),
            icon: <CommentIcon />,
        });
    }

    return <CardActionBar actions={actions} />;
}
