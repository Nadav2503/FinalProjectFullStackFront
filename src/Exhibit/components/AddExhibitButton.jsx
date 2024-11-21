import React from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function AddNewExhibitButton({ onAddExhibit }) {
    return (
        <Fab
            color="primary"
            aria-label="add"
            sx={{
                position: 'fixed',
                bottom: 70,
                right: 16,
            }}
            onClick={onAddExhibit}
        >
            <AddIcon />
        </Fab>
    );
}
