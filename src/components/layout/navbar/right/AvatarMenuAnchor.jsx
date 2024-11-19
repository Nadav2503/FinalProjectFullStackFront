import React from 'react';
import { Menu, Divider, Box } from '@mui/material';
import AvatarMenuItem from './AvatarMenuItem.jsx';  // Importing new component
import SwitchMode from './SwitchMode';

export default function AvatarMenu({ anchorEl, onClose }) {
    return (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={onClose}
            sx={{
                display: 'flex',
                justifyContent: 'center', // Center content horizontally
            }}
        >
            {/* Avatar should be centered in the menu */}
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 3 }}>
                <Avatar alt="User Avatar" src="/images/avatar.png" sx={{ width: 56, height: 56 }} />
            </Box>

            {/* Centering Menu Items */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <AvatarMenuItem label="Profile" onClick={onClose} />
                <AvatarMenuItem label="Login" onClick={onClose} />
                <AvatarMenuItem label="Signup" onClick={onClose} />
                <AvatarMenuItem label="Logout" onClick={onClose} />

                <Divider sx={{ my: 1 }} />

                <MenuItem onClick={onClose}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <SwitchMode />
                    </Box>
                </MenuItem>
            </Box>
        </Menu>
    );
}
