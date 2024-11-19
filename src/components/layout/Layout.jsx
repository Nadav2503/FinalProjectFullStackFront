import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

export default function Layout({ children }) {
    return (
        <Box>
            <Navbar />
            <Box >
                {children}
            </Box>
            <Footer />
        </Box>
    );
}
