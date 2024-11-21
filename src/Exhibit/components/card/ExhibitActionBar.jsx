import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CardActionBar from '../../../general/card/CardActionBar';

export default function ExhibitCardActionBar({
    exhibitId,
    handleDelete,
    handleEditExhibit,
}) {
    const actions = [
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
