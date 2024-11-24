import React from 'react';
import { CardActionArea } from '@mui/material';
import Card from '../../../general/card/Card';
import ExhibitCardHeader from './ExhibitCardHeader';
import ExhibitCardBody from './ExhibitCardBody';
import ExhibitActionBar from './ExhibitActionBar';

export default function ExhibitCard({ exhibit, handleDelete, handleEditExhibit }) {
    console.log('Rendering ExhibitCard for:', exhibit);

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

            <ExhibitActionBar
                exhibitId={exhibit._id}
                handleDelete={handleDelete}
                handleEditExhibit={handleEditExhibit}
            />
        </Card>
    );
}
