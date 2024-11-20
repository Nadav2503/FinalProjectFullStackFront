import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// ErrorPage component displayed when a user navigates to a non-existent route.
export default function Error() {
    const navigate = useNavigate(); // Hook for programmatic navigation.

    // Function to navigate back to the Home page.
    const handleGoBack = () => {
        navigate('/'); // Redirects user to the homepage.
    };

    return (
        <Box
            sx={{
                display: 'flex', // Flexbox layout for centering content.
                flexDirection: 'column', // Stacks content vertically.
                justifyContent: 'center', // Centers content vertically.
                alignItems: 'center', // Centers content horizontally.
                height: '100vh', // Full viewport height.
                textAlign: 'center', // Centers text within the container.
                backgroundColor: 'background.default', // Background color from the theme.
                color: 'text.primary', // Text color from the theme.
            }}
        >
            {/* Large heading for the error code */}
            <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', mb: 2 }}>
                404
            </Typography>

            {/* Subheading describing the error */}
            <Typography variant="h5" sx={{ mb: 4 }}>
                Oops! The page you're looking for doesn't exist.
            </Typography>

            {/* Button to redirect to the homepage */}
            <Button
                variant="contained"
                color="primary"
                sx={{ padding: '10px 20px', fontSize: '1.2rem' }}
                onClick={handleGoBack}
            >
                Go Back to Home
            </Button>
        </Box>
    );
}
