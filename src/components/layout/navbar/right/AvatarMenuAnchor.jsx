import React from 'react';
import { Menu } from '@mui/material';

export default function AvatarMenuAnchor({ anchorEl, onClose }) {
    return (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={onClose}
        >
        </Menu>
    );
}
