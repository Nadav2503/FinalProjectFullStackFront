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
                padding: '10px', // Optional padding for better spacing
                boxSizing: 'border-box', // Ensures padding doesn't affect width
            }}
        >
            {/* Container for the individual navigation items */}
            <Box
                sx={{
                    display: 'flex', // Use flexbox for aligning nav items horizontally
                    alignItems: 'center', // Align nav items vertically
                    gap: 2, // Adds space between nav items
                    flexWrap: 'wrap', // Allows the items to wrap for smaller screens
                    justifyContent: 'center', // Ensures items are centered on smaller screens
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
