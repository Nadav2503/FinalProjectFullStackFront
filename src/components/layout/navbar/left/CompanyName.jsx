import React from 'react';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for programmatic navigation
import '../../../../styles/leftNavigation/CompanyName.css'; // Import the CSS file

export default function CompanyName() {
    const navigate = useNavigate();

    const handleCompanyNameClick = () => {
        navigate('/'); // Navigate to the home page when clicked
    };

    return (
        <Typography
            variant="h6" // Styling for the company name (header size)
            color="inherit" // Inherits the color from the parent theme
            onClick={handleCompanyNameClick} // Click handler to navigate to home
            className="company-name" // Apply the CSS class
        >
            Virtual Zoo
        </Typography>
    );
}
