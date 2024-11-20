import React from 'react';
import { Button } from '@mui/material'; // Import necessary MUI components.
import Loader from './Loader';

export default function CustomButton({
    variant = 'contained', // Default is 'contained'
    color = 'primary', // Default color is 'primary'
    startIcon = null, // No start icon by default
    endIcon = null, // No end icon by default
    loading = false, // Button is not loading by default
    onClick, // Handle button click
    disabled = false, // Button is enabled by default
    size = 'medium', // Default size is medium
    children, // Button text or children passed inside
}) {
    return (
        <Button
            variant={variant}
            color={color}
            startIcon={startIcon}
            endIcon={endIcon}
            onClick={onClick}
            disabled={disabled || loading} // Disable button if it's in loading state or explicitly disabled
            size={size}
            sx={{
                padding: '10px 20px', // Custom padding
                fontSize: '16px', // Font size for button text
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Shadow for button
                '&:hover': {
                    transform: 'scale(1.05)', // Slight zoom effect on hover
                    transition: 'transform 0.2s ease-in-out',
                },
            }}
        >
            {loading ? (
                <Loader size={24} color="inherit" /> // Show loading spinner
            ) : (
                children // Show button text or children
            )}
        </Button>
    );
}
