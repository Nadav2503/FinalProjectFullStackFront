import React from 'react';
import { Box } from '@mui/material';
import AvatarProfileImage from './Avatar';
import AvatarMenu from './AvatarMenuAnchor';  // Updated to use the AvatarMenu
import useAnchor from '../useAnchor';


export default function RightHeader() {
    const { anchorEl, handleAnchorClick, handleAnchorClose } = useAnchor();

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            {/* Avatar centered outside the menu */}
            <AvatarProfileImage onClick={handleAnchorClick} />

            {/* Avatar Menu */}
            <AvatarMenu anchorEl={anchorEl} onClose={handleAnchorClose} />
        </Box>
    );
}
