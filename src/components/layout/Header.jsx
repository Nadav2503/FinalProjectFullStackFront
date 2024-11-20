import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import LeftHeader from './navbar/left/LeftHeader';
import MiddleHeader from './navbar/middle/MiddleHeader';
import RightHeader from './navbar/right/RightHeader';

// Main header of the application, containing left, middle, and right sections.
export default function Header() {
    return (
        <AppBar position="static" color="primary" elevation={10}>
            {/* Toolbar provides a container for layout and aligns items in a row */}
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {/* Left section of the header (e.g., logo or menu icon) */}
                <LeftHeader />
                {/* Middle section of the header (e.g., search bar or links) */}
                <MiddleHeader />
                {/* Right section of the header (e.g., user avatar or settings menu) */}
                <RightHeader />
            </Toolbar>
        </AppBar>
    );
}
