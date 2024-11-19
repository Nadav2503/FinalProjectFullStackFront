import React from 'react';
import { Container, Typography } from '@mui/material';

export default function About() {
    return (
        <Container
            maxWidth="md"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '2rem',
            }}
        >
            <Typography
                variant="h3"
                component="h1"
                sx={{
                    marginBottom: 2,
                    fontSize: '2rem',
                    fontWeight: 'bold',
                }}
            >
                About the Virtual Zoo
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    fontSize: '1.2rem',
                    lineHeight: 1.6,
                    maxWidth: '800px',
                    marginBottom: 4,
                }}
            >
                Welcome to the Virtual Zoo! Our zoo brings you closer to the
                animal kingdom, allowing you to explore different exhibits,
                learn about wildlife, and experience the beauty of nature right
                from the comfort of your home. We are dedicated to providing an
                immersive and educational experience for all ages. Join us on an
                exciting journey to discover animals, their habitats, and the
                importance of conservation.
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    fontSize: '1rem',
                    color: '#777',
                }}
            >
                Experience the wonders of the animal kingdom without leaving your
                home. We hope you enjoy your visit to the Virtual Zoo!
            </Typography>
        </Container>
    );
}
