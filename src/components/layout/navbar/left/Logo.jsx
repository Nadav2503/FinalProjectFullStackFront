import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for programmatic navigation

export default function Logo() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/'); // Navigate to the home page when clicked
    };

    return (
        <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }} onClick={handleLogoClick}>
            <Avatar
                src="/images/zooLogo.png"
                alt="Zoo logo"
                sx={{ width: 100, height: 40, borderRadius: '50%' }} // Adjust size if necessary
            />
        </IconButton>
    );
}
