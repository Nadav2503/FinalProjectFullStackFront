import React, { useState } from 'react';
import { Box, Divider } from '@mui/material';
import SwitchMode from './SwitchMode';
import AvatarProfileImage from './Avatar';
import AvatarMenu from './AvatarMenuAnchor';


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
            <AvatarProfileImage onClick={handleAvatarClick} />

            {/* Divider Line between Avatar and Navbar */}
            <Divider sx={{ mx: 2, height: 32 }} orientation="vertical" />

            {/* Avatar Menu */}
            <AvatarMenu anchorEl={anchorEl} onClose={handleMenuClose} />

            {/* Divider Line */}
            <Divider sx={{ mx: 2, height: 32 }} orientation="vertical" />

            {/* SwitchMode */}
            <SwitchMode />
        </Box>
    );
}
