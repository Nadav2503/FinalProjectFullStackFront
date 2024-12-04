import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import AvatarProfileImage from './Avatar';
import AvatarMenu from './AvatarMenuAnchor';
import useAnchor from '../useAnchor';
import { useCurrentVisitor } from '../../../providers/VisitorProvider';
import { getVisitorById } from '../../../services/VisitorServiceApi';

export default function RightHeader() {
    const { anchorEl, handleAnchorClick, handleAnchorClose } = useAnchor();
    const { visitor } = useCurrentVisitor(); // Access visitor context
    const [username, setUsername] = useState(null);
    useEffect(() => {
        const fetchUsername = async () => {
            if (visitor && visitor._id) { // Check visitor object
                try {
                    const visitorData = await getVisitorById(visitor._id); // Fetch visitor details
                    setUsername(visitorData.username); // Update username state
                } catch (error) {
                    console.error('Error fetching visitor details:', error);
                }
            }
        };

        if (visitor && visitor._id) {
            fetchUsername();
        }
    }, [visitor]); // Only rerun if visitor changes

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
