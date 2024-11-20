import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import PageHeader from '../components/general/PageHeader'; // Import PageHeader
import ErrorImage from '/images/robot.png'; // Example error image path
import CustomButton from '../components/general/CustomButton';

export default function Error() {
    const navigate = useNavigate(); // Hook for programmatic navigation.
    const theme = useTheme(); // Access the current theme (light/dark mode).

    // Function to navigate back to the Home page.
    const handleGoBack = () => {
        navigate('/'); // Redirects user to the homepage.
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                textAlign: 'center',
                backgroundColor: 'background.default',
                color: 'text.primary',
                padding: 4,
            }}
        >
            {/* Page Header */}
            <PageHeader
                title="Error 404"
                subtitle="Oops! The page you're looking for doesn't exist."
            />

            {/* Error Image */}
            <Box
                component="img"
                src={ErrorImage}
                alt="Error Illustration"
                sx={{
                    width: '300px',
                    height: 'auto',
                    mb: 4,
                    backgroundColor:
                        theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    padding: theme.palette.mode === 'dark' ? '10px' : '0',
                    borderRadius: '10px',
                    boxShadow: theme.palette.mode === 'dark' ? '0px 4px 10px rgba(0, 0, 0, 0.7)' : 'none',
                }}
            />

            {/* Large heading for the error code */}
            <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', mb: 2 }}>
                something went wrong
            </Typography>

            {/* Subheading describing the error */}
            <Typography variant="h5" sx={{ mb: 4 }}>
                Sorry, we couldn’t find the page you were looking for.
            </Typography>

            {/* Button to redirect to the homepage */}
            <CustomButton
                variant="contained"
                color="primary"
                sx={{ padding: '10px 20px', fontSize: '1.2rem' }}
                onClick={handleGoBack}
            >
                Go Back to Home
            </CustomButton>
        </Box>
    );
}
