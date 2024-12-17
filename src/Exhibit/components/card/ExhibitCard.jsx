import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { CardActionArea } from '@mui/material';
import Card from '../../../general/card/Card';
import ExhibitHeader from './ExhibitHeader';
import ExhibitBody from './ExhibitBody';
import ExhibitActionBar from './ExhibitActionBar';
import ROUTES from '../../../routers/routerModel';
import { useCurrentVisitor } from '../../../providers/VisitorProvider';

export default function ExhibitCard({ exhibit, handleDelete, handleEditExhibit }) {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const { visitor } = useCurrentVisitor(); // Accessing the visitor data from the context

    const handleCardClick = () => {
        navigate(`${ROUTES.EXHIBIT_INFO}/${exhibit._id}`);
    };

    // Check if the visitor has permission to see the action bar (not Tier 1 or 2)
    const canShowActionBar = visitor?.membershipTier > 2 || visitor?.isAdmin;

    return (
        <Card>
            <ExhibitHeader title={exhibit.name} />
            <CardActionArea onClick={handleCardClick}>
                <ExhibitBody
                    description={exhibit.description}
                    capacity={exhibit.capacity}
                    location={exhibit.location}
                    status={exhibit.status}
                />
            </CardActionArea>
            {canShowActionBar && (
                <ExhibitActionBar
                    exhibitId={exhibit._id}
                    handleDelete={(id) => handleDelete(id, exhibit.animals)}
                    handleEditExhibit={handleEditExhibit}
                />
            )}
        </Card>
    );
}
