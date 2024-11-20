import React from 'react';
import { Container, Typography } from '@mui/material';

// AboutPage component that provides information about the Virtual Zoo.
export default function About() {
    return (
        <Container
            maxWidth="md"
            sx={{
                display: 'flex', // Flexbox layout for centering content.
                flexDirection: 'column', // Stacks content vertically.
                justifyContent: 'center', // Centers content vertically within the container.
                alignItems: 'center', // Centers content horizontally.
                textAlign: 'center', // Centers text within the container.
                padding: '2rem', // Adds padding around the content.
            }}
        >
            {/* Main heading for the About page */}
            <Typography
                variant="h3"
                component="h1"
                sx={{
                    marginBottom: 2,
                    fontSize: '2rem', // Large font for emphasis.
                    fontWeight: 'bold', // Bold text for the title.
                }}
            >
                About the Virtual Zoo
            </Typography>

            {/* Description of the Virtual Zoo */}
            <Typography
                variant="body1"
                sx={{
                    fontSize: '1.2rem',
                    lineHeight: 1.6, // Improves readability with proper line spacing.
                    maxWidth: '800px', // Limits the width of the text for better layout.
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

            {/* Secondary description with a softer tone */}
            <Typography
                variant="body2"
                sx={{
                    fontSize: '1rem',
                    color: '#777', // Subtle text color for less emphasis.
                }}
            >
                Experience the wonders of the animal kingdom without leaving your
                home. We hope you enjoy your visit to the Virtual Zoo!
            </Typography>
        </Container>
    );
}
