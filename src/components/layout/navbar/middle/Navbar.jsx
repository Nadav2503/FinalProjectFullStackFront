import React from 'react';
import Search from './middle/Search';
import NavbarItem from './middle/NavbarItem';
import { Box } from '@mui/material';

export default function MiddleHeader() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Search />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <NavbarItem to="/">Home</NavbarItem>
                <NavbarItem to="/about">About</NavbarItem>
                <NavbarItem to="*">Contact</NavbarItem>
            </Box>
        </Box>
    );
}
