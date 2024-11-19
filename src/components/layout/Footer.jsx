import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                textAlign: 'center',
                padding: '1rem',
                marginTop: 'auto',
            }}
        >
            <Typography variant="body2">
                © {new Date().getFullYear()} Virtual Zoo. All rights reserved.
            </Typography>
        </Box>
    );
}
