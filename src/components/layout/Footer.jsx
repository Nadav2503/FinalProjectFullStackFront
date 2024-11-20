import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

export default function Footer() {
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: theme.palette.primary.main, // Footer's background from theme
                color: theme.palette.text.primary, // Footer text color
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
