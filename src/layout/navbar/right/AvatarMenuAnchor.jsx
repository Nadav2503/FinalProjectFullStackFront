import React from 'react';
import { Menu, Box, MenuItem } from '@mui/material';
import SwitchMode from './SwitchMode'; // Theme toggle switch component
import NavBarItem from '../middle/NavbarItem'; // Reusable navigation item component

/**
 * AvatarMenu Component:
 * Displays a dropdown menu anchored to an avatar button.
 * Provides navigation options and a theme toggle switch.
 *
 * @param {object} anchorEl - The element the menu is anchored to.
 * @param {function} onClose - Callback to close the menu.
 */
export default function AvatarMenu({ anchorEl, onClose }) {
    return (
        <Menu
            anchorEl={anchorEl} // Element to anchor the menu
            open={Boolean(anchorEl)} // Open menu if anchor element exists
            onClose={onClose} // Handle menu close event
            PaperProps={{
                sx: {
                    padding: 2, // Adds padding to the menu container
                    backgroundColor: 'background.paper', // Theme-based background color
                    minWidth: { xs: '200px', sm: '250px' }, // Responsive width for small and larger screens
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column', // Vertical layout for menu items
                    gap: 1, // Space between items
                }}
            >
                {/* Navigation items with close on click */}
                <NavBarItem label="Profile" variant="vertical" onClick={onClose} />
                <NavBarItem label="Login" variant="vertical" onClick={onClose} />
                <NavBarItem label="Signup" variant="vertical" onClick={onClose} />
                <NavBarItem label="Logout" variant="vertical" onClick={onClose} />

                {/* Theme toggle switch centered within a menu item */}
                <MenuItem onClick={onClose}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center', // Center the switch horizontally
                            width: '100%',
                        }}
                    >
                        <SwitchMode />
                    </Box>
                </MenuItem>
            </Box>
        </Menu>
    );
}
