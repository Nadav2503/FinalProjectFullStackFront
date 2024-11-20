import React from 'react';
import { Box } from '@mui/material';
import AvatarProfileImage from './Avatar';
import AvatarMenu from './AvatarMenuAnchor';
import useAnchor from '../useAnchor';

// Header section displaying the avatar and the associated menu.
export default function RightHeader() {
    // Custom hook for managing anchor element state.
    const { anchorEl, handleAnchorClick, handleAnchorClose } = useAnchor();

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            {/* Avatar icon button triggers the menu */}
            <AvatarProfileImage onClick={handleAnchorClick} />

            {/* Dropdown menu anchored to the avatar */}
            <AvatarMenu anchorEl={anchorEl} onClose={handleAnchorClose} />
        </Box>
    );
}
