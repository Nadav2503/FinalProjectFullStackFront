import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';

export default function CardBody({ content }) {
    // Media query hook for responsiveness (small screens)
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box
            className="card-body"
            sx={{
                padding: 2, // Padding for spacing
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                backgroundColor: 'background.paper', // Ensures background is consistent with theme
                boxShadow: 1, // Slight shadow for separation
                borderRadius: 1, // Rounded corners
                width: '100%',
                maxWidth: isSmallScreen ? '100%' : '500px', // Restricts width on larger screens
            }}
        >
            {/* Render content dynamically, which can be text, JSX, or other components */}
            <Typography
                variant="body1" // Ensures consistent typography styling
                sx={{
                    textAlign: 'left', // Left align the content
                    color: 'text.primary', // Uses theme colors
                }}
            >
                {content}
            </Typography>
        </Box>
    );
}
