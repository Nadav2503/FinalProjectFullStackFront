import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CardActionBar from '../../../general/card/CardActionBar';
import { useNavigate } from 'react-router-dom';

export default function ExhibitActionBar({ exhibitId, handleDelete, }) {
    const navigate = useNavigate();
    const actions = [
        {
            onClick: () => navigate(`/edit-exhibit/${exhibitId}`),
            icon: <EditIcon />,
        },
        {
            onClick: () => handleDelete(exhibitId),
            icon: <DeleteIcon />,
        },
    ];

    return <CardActionBar actions={actions} />;
}