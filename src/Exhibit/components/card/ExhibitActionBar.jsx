import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CardActionBar from '../../../general/card/CardActionBar';
import ROUTES from '../../../routers/routerModel';
import CommentIcon from '@mui/icons-material/Comment';
import { useNavigate } from 'react-router-dom';

export default function ExhibitActionBar({ exhibitId, handleDelete, handleEditExhibit }) {
    const navigate = useNavigate();
    const actions = [
        {
            onClick: () => handleEditExhibit(exhibitId), // Call handleEditExhibit when the edit icon is clicked
            icon: <EditIcon />,
        },
        {
            onClick: () => handleDelete(exhibitId), // Call handleDelete when the delete icon is clicked
            icon: <DeleteIcon />,
        },
        {
            onClick: () => navigate(`${ROUTES.ADD_REVIEW}?exhibitId=${exhibitId}`),
            icon: <CommentIcon />,
        },
    ];

    return <CardActionBar actions={actions} />;
}
