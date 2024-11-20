import React from 'react';
import { Box } from '@mui/material';
import NavBarItem from './NavbarItem';

export default function Navbar() {
    return (
        // Top-level container for navigation items
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* Individual navigation items */}
                <NavBarItem to="/" label="Home" />
                <NavBarItem to="/about" label="About" />
                <NavBarItem to="*" label="Contact" />
            </Box>
        </Box>
    );
}
