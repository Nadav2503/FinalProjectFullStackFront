import React from 'react';
import { IconButton, Avatar } from '@mui/material';

export default function AvatarComponent({ onClick }) {
    return (
        <IconButton onClick={onClick} color="inherit" sx={{ ml: 2 }}>
            <Avatar alt="User Avatar" src="/images/avatar.png" />
        </IconButton>
    );
}
