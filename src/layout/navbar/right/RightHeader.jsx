import React from 'react';
import { Box } from '@mui/material';
import AvatarProfileImage from './Avatar'; // Component to display the avatar
import AvatarMenu from './AvatarMenuAnchor'; // Component for the dropdown menu
import useAnchor from '../useAnchor'; // Custom hook for managing anchor state

export default function RightHeader() {
    // Destructured state and handlers from the custom hook
    const { anchorEl, handleAnchorClick, handleAnchorClose } = useAnchor();

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                width: { xs: '100%', sm: 'auto' }, // Full width on small screens
            }}
        >
            {/* Avatar button - toggles the dropdown menu */}
            <AvatarProfileImage onClick={handleAnchorClick} />

            {/* Dropdown menu - anchored to the avatar */}
            <AvatarMenu anchorEl={anchorEl} onClose={handleAnchorClose} />
        </Box>
    );
}
