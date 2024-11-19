import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4 } from '@mui/icons-material';

export default function SwitchMode() {
  return (
    <IconButton sx={{ ml: 2 }} color="inherit">
      <Brightness4 />
    </IconButton>
  );
}
