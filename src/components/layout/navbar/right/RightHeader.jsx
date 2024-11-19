import React, { useState } from 'react';
import { Box } from '@mui/material';
import SwitchMode from './SwitchMode';
import AvatarComponent from './Avatar';
import AvatarMenuAnchor from './AvatarMenuAnchor';


export default function RightHeader() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget); // Open the menu by setting the anchor element
    };

    const handleMenuClose = () => {
        setAnchorEl(null); // Close the menu by setting anchorEl to null
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>

            {/* Avatar */}
            <AvatarComponent onClick={handleAvatarClick} />

            {/* Avatar Menu */}
            <AvatarMenuAnchor anchorEl={anchorEl} onClose={handleMenuClose} />
            {/* SwitchMode */}
            <SwitchMode />
        </Box>
    );
}
