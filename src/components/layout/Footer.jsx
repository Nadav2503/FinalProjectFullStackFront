import React from 'react';
import { Box, Typography } from '@mui/material';

// Footer component displayed at the bottom of the page.
export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'primary.main', // Footer's background color from the theme.
                color: 'white', // White text for contrast.
                textAlign: 'center', // Centers the content horizontally.
                padding: '1rem', // Adds padding inside the footer.
                marginTop: 'auto', // Ensures the footer stays at the bottom of the page.
            }}
        >
            {/* Displays copyright information dynamically for the current year */}
            <Typography variant="body2">
                © {new Date().getFullYear()} Virtual Zoo. All rights reserved.
            </Typography>
        </Box>
    );
}
