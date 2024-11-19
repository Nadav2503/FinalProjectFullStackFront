import React from 'react';
import { Box } from '@mui/material';
import NavBarItem from './NavbarItem';

export default function Navbar() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <NavBarItem to="/" label="Home" />
                <NavBarItem to="/about" label="About" />
                <NavBarItem to="*" label="Contact" />
            </Box>
        </Box>
    );
}
