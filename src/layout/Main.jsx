import React from 'react';
import { Box } from '@mui/material';
import CustomButton from '../general/CustomButton';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import ROUTES from '../routers/routerModel';

export default function Main({ children, hideBackButton }) {
    const navigate = useNavigate(); // For navigation
    const location = useLocation(); // To check the current route

    // Define routes where the back button should not appear
    const noBackButtonRoutes = [ROUTES.ROOT]; // Add routes where the back button is unnecessary

    const shouldHideBackButton = hideBackButton || noBackButtonRoutes.includes(location.pathname);

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
            {/* Conditional Back Button */}
            {!shouldHideBackButton && (
                <Box sx={{ mb: 2 }}>
                    <CustomButton
                        startIcon={<ArrowBack />}
                        onClick={() => navigate(-1)} // Go back to the previous page
                    >
                        Back
                    </CustomButton>
                </Box>
            )}
            {children}
        </Box>
    );
}
