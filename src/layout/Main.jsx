import React from 'react';
import { Box } from '@mui/material';

export default function Main({ children }) {
    return (
        <Box
            component="main"
            sx={{
                height: '100%', // Inherits height from the parent (85vh)
                padding: '2rem', // Standard padding for content
                backgroundColor: 'background.default', // Dynamic theme-based background
                color: 'text.primary', // Theme-based text color
                overflow: 'auto', // Scrollable if content overflows
            }}
        >
            {children}
        </Box>
    );
}
