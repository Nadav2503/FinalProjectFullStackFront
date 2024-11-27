import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { CardActionArea } from '@mui/material';
import Card from '../../../general/card/Card';
import ExhibitCardHeader from './ExhibitCardHeader';
import ExhibitCardBody from './ExhibitCardBody';
import ExhibitActionBar from './ExhibitActionBar';
import ROUTES from '../../../routers/routerModel';

export default function ExhibitCard({ exhibit, handleDelete, handleEditExhibit }) {
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Navigate to the details page when the card is clicked
    const handleCardClick = () => {
        navigate(`${ROUTES.EXHIBIT_INFO}/${exhibit._id}`); // Navigate to exhibit details using exhibit._id
    };

    return (
        <Card>
            <ExhibitCardHeader title={exhibit.name} />
            <CardActionArea onClick={handleCardClick}>
                <ExhibitCardBody
                    description={exhibit.description}
                    capacity={exhibit.capacity}
                    location={exhibit.location}
                    status={exhibit.status}
                />
            </CardActionArea>
            <ExhibitActionBar exhibitId={exhibit._id} handleDelete={handleDelete} handleEditExhibit={handleEditExhibit} />
        </Card>
    );
}
