import React from 'react';
import { Box } from '@mui/material';
import NavBarItem from './NavbarItem';
import ROUTES from '../../../routers/routerModel';

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
                <NavBarItem to={ROUTES.ROOT} label="Home" />
                <NavBarItem to={ROUTES.ABOUT} label="About" />
                <NavBarItem to={ROUTES.MAP} label="Map" />
            </Box>
        </Box>
    );
}
