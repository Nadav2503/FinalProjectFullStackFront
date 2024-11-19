import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import LeftHeader from './navbar/left/LeftHeader';
import MiddleHeader from './navbar/middle/MiddleHeader';
import RightHeader from './navbar/right/RightHeader';

export default function Header() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* Left Header - Zoo Name & Logo */}
                <LeftHeader />

                {/* Middle Header - Search Bar & Navbar */}
                <MiddleHeader />

                {/* Right Header - Avatar, Mode Switch & Navbar Items */}
                <RightHeader />
            </Toolbar>
        </AppBar>
    );
}
