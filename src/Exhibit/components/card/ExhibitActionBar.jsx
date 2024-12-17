import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CardActionBar from '../../../general/card/CardActionBar';
import CommentIcon from '@mui/icons-material/Comment';
import { useNavigate } from 'react-router-dom';
import { useCurrentVisitor } from '../../../providers/VisitorProvider';

export default function ExhibitActionBar({ exhibitId, handleDelete, handleEditExhibit }) {
    const { visitor } = useCurrentVisitor(); // Accessing the visitor data from the context
    const navigate = useNavigate();

    // Check if the current visitor has the necessary permissions
    const canEditOrDelete = visitor?.isAdmin; // Admin can edit and delete
    const canWriteReview = visitor?.membershipTier === 3 || visitor?.membershipTier === 4 || visitor?.isAdmin; // Tiers 3, 4, or admin can write a review

    const actions = [
        {
            onClick: () => handleEditExhibit(exhibitId),
            icon: <EditIcon />,
            visible: canEditOrDelete, // Show edit icon only if the user has permission
        },
        {
            onClick: () => handleDelete(exhibitId),
            icon: <DeleteIcon />,
            visible: canEditOrDelete, // Show delete icon only if the user has permission
        },
        {
            onClick: () => navigate(`/add-review?exhibitId=${exhibitId}`),
            icon: <CommentIcon />,
            visible: canWriteReview, // Show review icon only if the user has permission
        },
    ];

    return (
        <CardActionBar
            actions={actions.filter(action => action.visible)} // Filter out actions that should not be visible
        />
    );
}
