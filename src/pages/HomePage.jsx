import React from 'react'
import { Button, Container, Typography } from '@mui/material';

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
                    }}
                >
                    Welcome to the Virtual Zoo!
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        marginBottom: 2,
                        padding: '15px 30px',
                        fontSize: '1.2rem',
                        backgroundColor: '#f1c40f',
                        '&:hover': {
                            backgroundColor: '#f39c12',
                        },
                    }}
                >
                    Buy Ticket
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        padding: '15px 30px',
                        fontSize: '1.2rem',
                        backgroundColor: '#2ecc71',
                        '&:hover': {
                            backgroundColor: '#27ae60',
                        },
                    }}
                >
                    Enter Zoo
                </Button>
            </Container>
        </div>
    )
}
