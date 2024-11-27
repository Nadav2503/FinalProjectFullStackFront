import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CardActionBar from '../../../general/card/CardActionBar';

export default function ExhibitActionBar({ exhibitId, handleDelete, handleEditExhibit }) {
    const actions = [
        {
            onClick: () => handleEditExhibit(exhibitId), // Call handleEditExhibit when the edit icon is clicked
            icon: <EditIcon />,
        },
        {
            onClick: () => handleDelete(exhibitId), // Call handleDelete when the delete icon is clicked
            icon: <DeleteIcon />,
        },
    ];

    return <CardActionBar actions={actions} />;
}
