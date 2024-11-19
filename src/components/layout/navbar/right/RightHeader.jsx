import React, { useState } from 'react';
import { Box } from '@mui/material';
import AvatarProfileImage from './Avatar';
import AvatarMenu from './AvatarMenuAnchor';

export default function RightHeader() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AvatarProfileImage onClick={handleAvatarClick} />

            <AvatarMenu anchorEl={anchorEl} onClose={handleMenuClose} />
        </Box>
    );
}
