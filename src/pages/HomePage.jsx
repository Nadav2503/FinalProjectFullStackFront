import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { LocalOffer, Map, Pets, Public } from '@mui/icons-material'; // Added additional icons
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Logo from '/images/zooLogo.png';
import CustomButton from '../general/CustomButton';

export default function Home() {
    // Access the theme to apply consistent styling based on light or dark mode
    const theme = useTheme();
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Function to handle Buy Ticket button click
    const handleBuyTicketClick = () => {
        navigate('/signup'); // Navigate to the signup page
    };

    // Function to handle Enter Zoo button click
    const handleEnterZooClick = () => {
        navigate('/map'); // Navigate to the map page
    };

    return (
        <Box
            sx={{
                background: theme.palette.mode === 'dark' ? '#1F4529' : '#C2FFC7', // Set background color based on the theme mode
                minHeight: '100vh', // Ensure the box takes up the full height of the screen
                display: 'flex', // Use flexbox layout for centering the content
                flexDirection: 'column', // Stack elements vertically
                alignItems: 'center', // Center elements horizontally
                padding: 4, // Add padding to the box
            }}
        >
            {/* Logo Section */}
            <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                {/* Icon above the logo */}
                <img
                    src={Logo} // Image source for the logo
                    alt="Virtual Zoo Logo" // Alt text for the image
                    style={{
                        width: '250px', // Set the logo width
                        marginBottom: '30px', // Add space below the logo
                    }}
                />
            </Box>

            {/* Title Section */}
            <Pets sx={{ fontSize: '3rem' }} /> {/* Paw print icon below the logo */}
            <Typography
                variant="h1" // Use h1 for the title
                sx={{
                    color: theme.palette.text.primary, // Set title color based on the theme
                    fontWeight: 'bold', // Make the title bold
                    fontSize: { xs: '2.5rem', sm: '3rem' }, // Set font size for responsiveness
                    textAlign: 'center', // Center the title horizontally
                    marginBottom: 3, // Add space below the title
                    textShadow: `3px 3px 6px ${theme.palette.mode === 'dark' ? '#000' : '#aaa'}`, // Add text shadow for better visibility in different modes
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/* Left icon */}
                <Public sx={{ marginRight: '8px', fontSize: '2rem' }} /> {/* Globe print icon on the left */}

                Welcome to the Virtual Zoo

                {/* Right icon */}
                <Public sx={{ marginLeft: '8px', fontSize: '2rem' }} /> {/* Globe icon on the right */}
            </Typography>

            {/* Action Buttons Section */}
            <Stack
                direction={{ xs: 'column', sm: 'row' }} // Stack buttons vertically on small screens and horizontally on larger ones
                spacing={3} // Set spacing between buttons
                sx={{
                    justifyContent: 'center', // Center buttons horizontally
                    alignItems: 'center', // Center buttons vertically
                    flexWrap: 'wrap', // Allow buttons to wrap on smaller screens
                    marginTop: 4, // Add space above the buttons
                }}
            >
                {/* Button for buying tickets */}
                <CustomButton
                    color="primary" // Primary button color
                    size="large" // Set the button size to large
                    startIcon={<LocalOffer />} // Add an icon to the button
                    sx={{ width: '200px' }} // Fixed width for the button to maintain alignment
                    onClick={handleBuyTicketClick} // Add click handler for Buy Ticket button
                >
                    Buy Ticket
                </CustomButton>

                {/* Button for entering the zoo */}
                <CustomButton
                    color="secondary" // Secondary button color
                    size="large" // Set the button size to large
                    startIcon={<Map />} // Add an icon to the button
                    sx={{ width: '200px' }} // Fixed width for the button to maintain alignment
                    onClick={handleEnterZooClick} // Add click handler for Enter Zoo button
                >
                    Enter Zoo
                </CustomButton>
            </Stack>

            {/* Description Section */}
            <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: 5 }}>
                <Typography
                    variant="h4" // Use h4 for the subtitle
                    sx={{
                        color: theme.palette.text.primary, // Set text color based on theme
                        fontWeight: 500, // Use semi-bold for the subtitle
                        marginBottom: 3, // Add space below the subtitle
                    }}
                >
                    Discover the wonders of the animal kingdom from your home!
                </Typography>
                <Typography
                    variant="body1" // Use body1 for the description
                    sx={{
                        color: theme.palette.text.secondary, // Set text color based on theme
                        lineHeight: 1.6, // Increase line height for better readability
                    }}
                >
                    Experience the zoo like never before with interactive exhibits, animal facts,
                    and live cams! Whether you're here to learn, explore, or simply have fun,
                    the Virtual Zoo is your gateway to a wild adventure.
                </Typography>
            </Container>
        </Box>
    );
}
