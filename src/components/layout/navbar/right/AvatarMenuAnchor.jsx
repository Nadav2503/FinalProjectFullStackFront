import React from 'react';
import { Menu, Box, MenuItem } from '@mui/material';
import SwitchMode from './SwitchMode';
import NavBarItem from '../middle/NavbarItem';

export default function AvatarMenu({ anchorEl, onClose }) {
    return (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={onClose}
        >
            {/* Centering Menu Items */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: 2 }}>
                <NavBarItem label="Profile" onClick={onClose} />
                <NavBarItem label="Login" onClick={onClose} />
                <NavBarItem label="Signup" onClick={onClose} />
                <NavBarItem label="Logout" onClick={onClose} />

                <MenuItem onClick={onClose}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <SwitchMode />
                    </Box>
                </MenuItem>
            </Box>
        </Menu>
    );
}
