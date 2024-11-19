import React from 'react';
import { Container, Typography } from '@mui/material';

export default function AboutPage() {
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, iusto amet, expedita temporibus nam quis ab repellendus error perspiciatis, consequuntur sed? Voluptate, consequuntur saepe magni odio sint sapiente rerum voluptates.
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    fontSize: '1rem',
                    color: '#777',
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A magnam maiores, praesentium in eum facere, nesciunt, accusantium adipisci sapiente at voluptates consequuntur earum eligendi sint illo ratione! Voluptatibus, at aliquid.
            </Typography>
        </Container>
    );
}
