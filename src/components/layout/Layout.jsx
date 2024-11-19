import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

export default function Layout({ children }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, padding: '1rem' }}>
                {children}
            </Box>
            <Footer />
        </Box>
    );
}
