import React from 'react';
import { CardActionArea } from '@mui/material';
import Card from '../../../general/card/Card';
import ExhibitCardHeader from './ExhibitCArdHeader';
import ExhibitCardBody from './ExhibitCardBody';
import ExhibitCardActionBar from './ExhibitActionBar';

export default function ExhibitCard({
    exhibit,
    handleDelete,
    handleEditExhibit,
    handleFavorite,
    isFavorite,
}) {

    return (
        <Card sx={{ maxWidth: 400, margin: 'auto', boxShadow: 3, borderRadius: 2 }}>
            <CardActionArea>
                <ExhibitCardHeader title={exhibit.name} />
                <ExhibitCardBody
                    description={exhibit.description}
                    capacity={exhibit.capacity}
                    location={exhibit.location}
                    status={exhibit.status}
                />
            </CardActionArea>

            <ExhibitCardActionBar
                exhibitId={exhibit._id}
                handleDelete={handleDelete}
                handleEditExhibit={handleEditExhibit}
                handleFavorite={handleFavorite}
                isFavorite={isFavorite}
            />
        </Card>
    );
}
