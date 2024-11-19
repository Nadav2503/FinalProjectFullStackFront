import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function Error() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                textAlign: 'center',
                backgroundColor: 'background.default',
                color: 'text.primary',
            }}
        >
            <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', mb: 2 }}>
                404
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
                Oops! The page you're looking for doesn't exist.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                sx={{ padding: '10px 20px', fontSize: '1.2rem' }}
            >
                Go Back
            </Button>
        </Box>
    );
}
