import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { CardActionArea } from '@mui/material';
import Card from '../../../general/card/Card';
import ExhibitHeader from './ExhibitHeader';
import ExhibitBody from './ExhibitBody';
import ExhibitActionBar from './ExhibitActionBar';
import ROUTES from '../../../routers/routerModel';

export default function ExhibitCard({ exhibit, handleDelete, handleEditExhibit }) {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleCardClick = () => {
        navigate(`${ROUTES.EXHIBIT_INFO}/${exhibit._id}`);
    };

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
            <ExhibitActionBar exhibitId={exhibit._id} handleDelete={(id) => handleDelete(id, exhibit.animals)} handleEditExhibit={handleEditExhibit} />
        </Card>
    );
}
