import React, { useState } from 'react';
import { Box } from '@mui/material';
import AvatarProfileImage from './Avatar';
import AvatarMenu from './AvatarMenuAnchor';
import useAnchor from '../useAnchor';
import { useCurrentVisitor } from '../../../providers/VisitorProvider';


export default function RightHeader() {
    const { anchorEl, handleAnchorClick, handleAnchorClose } = useAnchor();
    const { visitor } = useCurrentVisitor(); // Access visitor context
    const [username, setUsername] = useState(null);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                gap: 1, // Adds spacing between the avatar and username
            }}
        >
            {/* Avatar button */}
            <AvatarProfileImage onClick={handleAnchorClick} />

            {/* Dropdown menu */}
            <AvatarMenu anchorEl={anchorEl} onClose={handleAnchorClose} />
        </Box>
    );
}
