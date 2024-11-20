import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for programmatic navigation
import '../../../../styles/leftNavigation/Logo.css'; // Import CSS file for styling

export default function Logo() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/'); // Navigate to the home page when clicked
    };

    return (
        <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }} onClick={handleLogoClick}>
            <Avatar
                src="/images/zooLogo.png" // Source for the zoo logo image
                alt="Zoo logo" // Accessible alternative text for screen readers
                className="logo-avatar" // Apply CSS class for styling
            />
        </IconButton>
    );
}
