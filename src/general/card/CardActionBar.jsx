import React from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';

export default function CardActionBar({ actions = [] }) {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box
            className="card-actions"
            sx={{
                display: 'flex',
                flexDirection: isSmallScreen ? 'column' : 'row', // Stack icons vertically on small screens
                justifyContent: 'space-between',
                gap: 1,
                padding: 2,
                width: '100%',
            }}
        >
            {actions.map((action, index) => (
                <IconButton
                    key={index}
                    onClick={action.onClick}
                    color={action.active ? 'primary' : 'default'} // Optional: Customize color based on active state
                    sx={{
                        width: isSmallScreen ? '100%' : 'auto', // Full width on small screens
                        textAlign: 'center', // Centers the button text
                    }}
                >
                    {action.icon} {/* Render the icon passed in the action */}
                </IconButton>
            ))}
        </Box>
    );
}
