import React from 'react';
import { Menu, MenuItem } from '@mui/material';

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
        </Menu>
    );
}
