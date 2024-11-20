import React from 'react';
import { CircularProgress, Box } from '@mui/material';

// Loader component: Displays a loading spinner in the center of the screen.
export default function Loader() {
    return (
        <Box sx={{
            display: 'flex', // Use flexbox layout
            justifyContent: 'center', // Center the spinner horizontally
            alignItems: 'center', // Center the spinner vertically
            height: '100vh' // Full viewport height to center vertically
        }}>
            {/* CircularProgress: MUI's spinner component. */}
            <CircularProgress size={60} color="primary" />
        </Box>
    );
}
