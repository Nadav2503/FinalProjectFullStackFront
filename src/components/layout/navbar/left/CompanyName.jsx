import React from 'react';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for programmatic navigation

export default function CompanyName() {
    const navigate = useNavigate();

    const handleCompanyNameClick = () => {
        navigate('/'); // Navigate to the home page when clicked
    };

    return (
        <Typography
            variant="h6"
            color="inherit"
            onClick={handleCompanyNameClick}
            sx={{
                cursor: 'pointer',
                // Hide company name on mobile (<600px)
                '@media (max-width: 600px)': {
                    display: 'none',
                },
            }}
        >
            Virtual Zoo
        </Typography>
    );
}
