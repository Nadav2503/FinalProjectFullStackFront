import React from 'react';
import { Box } from '@mui/material';

// Main content container for the app.
export default function Main({ children }) {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1, // Makes the main content expand to fill available space.
                padding: '2rem', // Adds padding around the content.
                minHeight: 'calc(100vh - 64px - 48px)', // Ensures the main content adjusts for header (64px) and footer (48px).
                backgroundColor: 'background.default', // Background color from the theme.
                color: 'text.primary', // Text color from the theme.
            }}
        >
            {/* Renders the child components */}
            {children}
        </Box>
    );
}
