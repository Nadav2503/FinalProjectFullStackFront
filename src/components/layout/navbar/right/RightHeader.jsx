import React from 'react';
import { Box } from '@mui/material';
import SwitchMode from './SwitchMode';
import AvatarProfileImage from './Avatar';
import AvatarMenu from './AvatarMenuAnchor';


export default function RightHeader() {

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>

            {/* Avatar */}
            <AvatarProfileImage />
            {/* Avatar Menu */}
            <AvatarMenu />
            {/* SwitchMode */}
            <SwitchMode />
        </Box>
    );
}
