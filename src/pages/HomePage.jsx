import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { LocalOffer, Map } from '@mui/icons-material'; // Import icons for the buttons.
import '../styles/HomePage.css'; // Custom CSS for additional styles.

// HomePage component that serves as the entry point to the Virtual Zoo.
export default function Home() {
    return (
        <div className="home-page">
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
                        color: 'white',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Adds a shadow effect for better visibility.
                        marginBottom: 4,
                        fontFamily: 'Cursive, Arial, sans-serif', // Custom font style.
                    }}
                >
                    Welcome to the Virtual Zoo!
                </Typography>

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
                        backgroundColor: '#f1c40f', // Custom color.
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Adds depth with a shadow.
                        '&:hover': {
                            backgroundColor: '#f39c12',
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
                        backgroundColor: '#2ecc71', // Custom color.
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                        '&:hover': {
                            backgroundColor: '#27ae60',
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
