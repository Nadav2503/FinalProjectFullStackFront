import React from 'react';
import { IconButton, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '../../../../providers/CustomThemeProvider';

export default function SwitchMode() {
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: 2 }}>
      <IconButton sx={{ color: 'inherit' }} onClick={toggleDarkMode}>
        {isDark ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  );
}
