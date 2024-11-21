import React from 'react';
import { Box, Button, useMediaQuery } from '@mui/material';

export default function CardActionBar({ actions }) {
    // Media query hook for responsiveness (small screens)
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box
            className="card-actions"
            sx={{
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'row', // Stack buttons vertically on small screens
                justifyContent: 'space-between',
                gap: 1, // Adds spacing between buttons
                padding: 2, // Padding for spacing
                width: '100%',
            }}
        >
            {actions.map((action, index) => (
                <Button
                    key={index}
                    onClick={action.onClick}
                    variant="contained" // Ensures consistent button styling
                    color="primary" // Uses primary color from MUI theme
                    sx={{
                        width: isSmallScreen ? '100%' : 'auto', // Full width on small screens
                        textAlign: 'center', // Centers the button text
                    }}
                >
                    {action.label}
                </Button>
            ))}
        </Box>
    );
}
