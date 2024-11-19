import React from 'react';
import { IconButton } from '@mui/material';

export default function Logo() {
    return (
        <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
            <img src={sss} alt="Logo" style={{ height: '40px' }} />
        </IconButton>
    );
}
