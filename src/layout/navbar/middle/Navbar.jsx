import React from 'react';
import { Box } from '@mui/material';
import NavBarItem from './NavbarItem';

export default function Navbar() {
    return (
        // Top-level container for the entire navbar
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center', // Centers the navbar content horizontally
                alignItems: 'center', // Centers the items vertically
                width: '100%', // Ensures navbar spans the full width of the screen
            }}
        >
            {/* Container for the individual navigation items */}
            <Box
                sx={{
                    display: 'flex', // Use flexbox for aligning nav items horizontally
                    alignItems: 'center', // Align nav items vertically
                }}
            >
                {/* Individual navigation items */}
                <NavBarItem to="/" label="Home" />
                <NavBarItem to="/about" label="About" />
                <NavBarItem to="*" label="Contact" />
            </Box>
        </Box>
    );
}
