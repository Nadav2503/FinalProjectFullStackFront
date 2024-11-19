import React from 'react';
import { IconButton, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

export default function SwitchMode() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: 2 }}>
      {/* Light Mode Button */}
      <IconButton sx={{ color: 'inherit' }}>
        <Brightness7 />
      </IconButton>

      {/* Dark Mode Button */}
      <IconButton sx={{ color: 'inherit' }}>
        <Brightness4 />
      </IconButton>
    </Box>
  );
}
