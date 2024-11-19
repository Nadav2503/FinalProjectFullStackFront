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
            PaperProps={{
                sx: {
                    padding: 2,
                    backgroundColor: 'background.paper',
                },
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <NavBarItem label="Profile" variant="vertical" onClick={onClose} />
                <NavBarItem label="Login" variant="vertical" onClick={onClose} />
                <NavBarItem label="Signup" variant="vertical" onClick={onClose} />
                <NavBarItem label="Logout" variant="vertical" onClick={onClose} />

                <MenuItem onClick={onClose}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <SwitchMode />
                    </Box>
                </MenuItem>
            </Box>
        </Menu>
    );
}
