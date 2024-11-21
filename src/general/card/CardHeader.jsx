import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';

export default function CardHeader({ title, image }) {
    // Media query hook for responsiveness (small screens)
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box
            className="card-header"
            sx={{
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'row', // Stack title and image vertically on small screens
                alignItems: 'center',
                padding: 2, // Padding for spacing
            }}
        >
            {image && (
                <Box
                    sx={{
                        width: isSmallScreen ? '100%' : '150px', // Image size adapts to screen width
                        marginBottom: isSmallScreen ? 2 : 0, // Adds margin bottom on small screens
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <img src={image} alt={title} className="card-header-image" style={{ width: '100%', objectFit: 'cover' }} />
                </Box>
            )}
            <Typography
                variant="h5"
                component="h2"
                sx={{
                    textAlign: 'center', // Centers the title
                    color: 'text.primary', // Color is derived from MUI's theme
                    fontWeight: 'bold',
                }}
            >
                {title}
            </Typography>
        </Box>
    );
}
