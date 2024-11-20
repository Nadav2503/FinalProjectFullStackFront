import React from 'react';
import Logo from './Logo';
import CompanyName from './CompanyName';
import { Box, Container } from '@mui/material'; // Using MUI components for layout
import '../../../../styles/leftNavigation/LeftHeader.css'; // Import CSS file for styling

export default function LeftHeader() {
    return (
        <Container maxWidth="xs" className="left-header-container"> {/* Using Container for better layout */}
            <Box
                className="left-header-box"
            >
                {/* Displays the logo on the left */}
                <Logo />
                {/* Contains the company name with overflow handling */}
                <Box className="company-name-box">
                    <CompanyName />
                </Box>
            </Box>
        </Container>
    );
}
