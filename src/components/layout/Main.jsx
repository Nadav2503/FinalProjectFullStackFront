import React from 'react';
import { Box } from '@mui/material';

export default function Main({ children }) {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                padding: '2rem',
                minHeight: 'calc(100vh - 64px - 48px)',
                backgroundColor: 'background.default',
                color: 'text.primary',
            }}
        >
            {children}
        </Box>
    );
}
