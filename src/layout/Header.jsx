import React from 'react';
import { AppBar, Toolbar, useTheme } from '@mui/material';
import LeftHeader from './navbar/left/LeftHeader';
import MiddleHeader from './navbar/middle/MiddleHeader';
import RightHeader from './navbar/right/RightHeader';

export default function Header() {
    const theme = useTheme();

    return (
        <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <LeftHeader />
                <MiddleHeader />
                <RightHeader />
            </Toolbar>
        </AppBar>
    );
}
