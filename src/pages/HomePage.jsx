import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { LocalOffer, Map } from '@mui/icons-material';  // Corrected import
import '../styles/HomePage.css';

export default function HomePage() {
    return (
        <div className="home-page">
            <Container
                maxWidth="sm"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                        color: 'white',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        marginBottom: 4,
                        fontFamily: 'Cursive, Arial, sans-serif',
                    }}
                >
                    Welcome to the Virtual Zoo!
                </Typography>

                <Button
                    variant="contained"
                    startIcon={<LocalOffer />}  // Using the correct icon name
                    color="primary"
                    sx={{
                        marginBottom: 3,
                        padding: '20px 40px',
                        fontSize: '1.5rem',
                        borderRadius: 3,
                        backgroundColor: '#f1c40f',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                        '&:hover': {
                            backgroundColor: '#f39c12',
                            transform: 'scale(1.1)',  // Added scale on hover directly here
                            transition: 'transform 0.3s ease',
                        },
                    }}
                >
                    Buy Ticket
                </Button>

                <Button
                    variant="contained"
                    startIcon={<Map />}  // Map icon should work as is
                    color="secondary"
                    sx={{
                        marginBottom: 3,
                        padding: '20px 40px',
                        fontSize: '1.5rem',
                        borderRadius: 3,
                        backgroundColor: '#2ecc71',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                        '&:hover': {
                            backgroundColor: '#27ae60',
                            transform: 'scale(1.1)',  // Added scale on hover directly here
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
