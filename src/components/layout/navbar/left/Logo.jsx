import React from 'react';
import { IconButton } from '@mui/material';

export default function Logo() {
    return (
        <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
            <Avatar src="/images/zooLogo.png" alt="Zoo logo" />
        </IconButton>
    );
}
