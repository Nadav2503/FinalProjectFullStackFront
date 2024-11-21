import React from 'react';
import { Container } from '@mui/material';
import ExhibitCard from './card/ExhibitCard';

export default function Exhibits({ exhibits, handleDelete, handleEditExhibit }) {
    return (
        <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {exhibits.map((exhibit) => (
                <ExhibitCard
                    key={exhibit._id}
                    exhibit={exhibit}
                    handleDelete={handleDelete}
                    handleEditExhibit={handleEditExhibit}
                />
            ))}
        </Container>
    );
}
