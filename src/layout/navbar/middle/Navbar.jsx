import React from 'react';
import { Box } from '@mui/material';
import NavBarItem from './NavbarItem';
import ROUTES from '../../../routers/routerModel';
import { isAuthenticated } from '../../../services/LocalStorageService';

export default function Navbar() {
    const isLoggedIn = isAuthenticated();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <NavBarItem to={ROUTES.ROOT} label="Home" />
                <NavBarItem to={ROUTES.ABOUT} label="About" />
                {isLoggedIn && <NavBarItem to={ROUTES.MAP} label="Map" />}
            </Box>
        </Box>
    );
}
