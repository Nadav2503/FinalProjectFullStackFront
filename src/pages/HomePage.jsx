import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { LocalOffer, Map } from '@mui/icons-material'; // Import icons for the buttons.
import { useTheme } from '@mui/material/styles'; // To access the theme and use custom colors.
import Logo from '/images/zooLogo.png';


// HomePage component that serves as the entry point to the Virtual Zoo.
export default function Home() {
    const theme = useTheme(); // Access the current theme

    return (
        <div className="home-page" style={{
            background: theme.palette.mode === 'dark' ? '#1F4529' : '#C2FFC7', // Use a custom background color from the palette
            padding: '20px', // Add some padding around the page
        }}>
            <Container
                maxWidth="sm"
                sx={{
                    display: 'flex', // Flexbox layout for centering content.
                    flexDirection: 'column', // Stacks content vertically.
                    justifyContent: 'center', // Centers content vertically within the container.
                    alignItems: 'center', // Centers content horizontally.
                    height: '100vh', // Full viewport height.
                    textAlign: 'center', // Centers text within the container.
                }}
            >
                {/* Main heading with a styled appearance */}
                <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                        color: theme.palette.mode === 'dark' ? '#E8ECD7' : '#62825D', // Lighter text color for dark mode and muted green for light mode
                        textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)', // Adds a deeper shadow for better visibility
                        marginBottom: 4,
                        fontFamily: 'Cursive, Arial, sans-serif', // Custom font style.
                    }}
                >
                    Welcome to the Virtual Zoo!
                </Typography>

                {/* Logo image */}
                <img
                    src={Logo}
                    alt="Virtual Zoo Logo"
                    style={{
                        width: '250px', // Adjust the width as needed.
                        marginBottom: '30px', // Space between the logo and buttons.
                    }}
                />

                {/* Button to navigate to the ticket purchasing page */}
                <Button
                    variant="contained"
                    startIcon={<LocalOffer />} // Adds an icon to the button.
                    color="primary"
                    sx={{
                        marginBottom: 3,
                        padding: '20px 40px', // Large button for emphasis.
                        fontSize: '1.5rem',
                        borderRadius: 3, // Rounded corners.
                        backgroundColor: theme.palette.mode === 'dark' ? '#F09319' : '#FFE31A', // Use orange for dark mode and yellow for light mode
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Adds depth with a shadow.
                        '&:hover': {
                            backgroundColor: theme.palette.mode === 'dark' ? '#F39C12' : '#F1C40F',
                            transform: 'scale(1.1)', // Slight zoom effect on hover.
                            transition: 'transform 0.3s ease',
                        },
                    }}
                >
                    Buy Ticket
                </Button>

                {/* Button to navigate to the zoo map */}
                <Button
                    variant="contained"
                    startIcon={<Map />} // Adds an icon to the button.
                    color="secondary"
                    sx={{
                        marginBottom: 3,
                        padding: '20px 40px',
                        fontSize: '1.5rem',
                        borderRadius: 3,
                        backgroundColor: theme.palette.mode === 'dark' ? '#9EDF9C' : '#2ECC71', // Light green for dark mode and zoo-like green for light mode
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                        '&:hover': {
                            backgroundColor: theme.palette.mode === 'dark' ? '#27AE60' : '#27AE60',
                            transform: 'scale(1.1)', // Slight zoom effect on hover.
                            transition: 'transform 0.3s ease',
                        },
                    }}
                >
                    Enter Zoo
                </Button>
            </Container>
        </div>
    );
}
