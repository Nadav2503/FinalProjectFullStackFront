import React from 'react';
import { Menu, MenuItem, Divider } from '@mui/material';
import SwitchMode from './SwitchMode';

export default function AvatarMenu({ anchorEl, onClose }) {
    return (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={onClose}
        >
            <MenuItem onClick={onClose}>Profile</MenuItem>
            <MenuItem onClick={onClose}>Login</MenuItem>
            <MenuItem onClick={onClose}>Signup</MenuItem>
            <MenuItem onClick={onClose}>Logout</MenuItem>

            <Divider sx={{ my: 1 }} />

            <MenuItem onClick={onClose}>
                <SwitchMode />
            </MenuItem>
        </Menu>
    );
}
