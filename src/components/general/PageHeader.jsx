import React from 'react';
import { Divider, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function PageHeader({ title, subtitle }) {
    const theme = useTheme(); // Access the theme

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                marginTop: 5,
                marginBottom: 3,
            }}
        >
            <Typography
                variant="h2"
                component="h1"
                sx={{
                    color: theme.palette.primary.main, // Use primary color from the theme
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="h5"
                component="h2"
                sx={{
                    color: theme.palette.text.secondary, // Use secondary text color from the theme
                    marginTop: 2,
                }}
            >
                {subtitle}
            </Typography>
            <Divider sx={{ my: 2, width: '100%', maxWidth: '600px' }} />
        </Container>
    );
}
