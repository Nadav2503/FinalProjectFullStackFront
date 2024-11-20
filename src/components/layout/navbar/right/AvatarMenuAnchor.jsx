import React from 'react';
import { Menu, Box, MenuItem } from '@mui/material';
import SwitchMode from './SwitchMode';
import NavBarItem from '../middle/NavbarItem';

// Menu component tied to the avatar, showing user-specific actions like login, logout, etc.
export default function AvatarMenu({ anchorEl, onClose }) {
    return (
        // Menu displays items when the anchor element is provided.
        <Menu
            anchorEl={anchorEl} // Element to which the menu is anchored.
            open={Boolean(anchorEl)} // Open when anchorEl is truthy.
            onClose={onClose} // Close handler for the menu.
            PaperProps={{
                sx: {
                    padding: 2, // Adds padding around the menu.
                    backgroundColor: 'background.paper', // Uses the theme's background color.
                },
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {/* Navigation items rendered vertically */}
                <NavBarItem label="Profile" variant="vertical" onClick={onClose} />
                <NavBarItem label="Login" variant="vertical" onClick={onClose} />
                <NavBarItem label="Signup" variant="vertical" onClick={onClose} />
                <NavBarItem label="Logout" variant="vertical" onClick={onClose} />

                {/* Theme toggle switch */}
                <MenuItem onClick={onClose}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <SwitchMode />
                    </Box>
                </MenuItem>
            </Box>
        </Menu>
    );
}
