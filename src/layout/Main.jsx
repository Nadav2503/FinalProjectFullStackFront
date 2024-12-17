import React from 'react';
import { Box } from '@mui/material';
import CustomButton from '../general/CustomButton';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import ROUTES from '../routers/routerModel';
import navigationHierarchy from '../routers/hirarchy';

export default function Main({ children, hideBackButton }) {
    const navigate = useNavigate(); // For navigation
    const location = useLocation(); // To check the current route

    const shouldHideBackButton = hideBackButton ||
        navigationHierarchy[ROUTES.ROOT].noBackButtonRoutes.includes(location.pathname) ||
        !Object.values(ROUTES).includes(location.pathname);

    // Function to get the back route
    const getBackRoute = () => {
        const currentRoute = location.pathname;

        // Check if there's a configuration for the current route
        if (navigationHierarchy[currentRoute]) {
            const routeConfig = navigationHierarchy[currentRoute];
            if (routeConfig.backRoute) {
                // If the back route is defined as a static route
                if (typeof routeConfig.backRoute === 'string') {
                    return routeConfig.backRoute;
                }

                // If the back route is a dynamic function (like for AddAnimal or EditAnimal)
                if (typeof routeConfig.backRoute === 'function') {
                    const exhibitId = new URLSearchParams(location.search).get('exhibitId');
                    return routeConfig.backRoute(exhibitId); // Get the dynamic back route
                }
            }
            if (routeConfig.canGoBackTo) {
                // Handle pages where back navigation is dynamic (can go back to multiple pages)
                const previousPage = location.state?.from || ROUTES.ROOT; // Default to home page if no previous page
                return previousPage;
            }
        }

        // Fallback to error page if route is undefined or not found
        return ROUTES.ERROR; // Default to error page
    };
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
            {!shouldHideBackButton && location.pathname !== ROUTES.ERROR && (
                <Box sx={{ mb: 2 }}>
                    <CustomButton
                        startIcon={<ArrowBack />}
                        onClick={() => navigate(getBackRoute())}
                    >
                        Back
                    </CustomButton>
                </Box>
            )}
            {children}
        </Box>
    );
}
