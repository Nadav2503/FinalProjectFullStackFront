import React from 'react';
import { MenuItem, Typography } from '@mui/material';

export default function AvatarMenuItem({ label, onClick }) {
    return (
        <MenuItem onClick={onClick} >
            <Typography variant="body1" > {label} </Typography>
        </MenuItem>
    );
}