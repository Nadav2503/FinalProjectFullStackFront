import React from 'react';
import { IconButton, Box } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '../../../../providers/CustomThemeProvider';

// Toggles between dark and light modes.
export default function SwitchMode() {
  const { isDark, toggleDarkMode } = useTheme(); // Get theme state and toggle function.

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: 2 }}>
      {/* Button to switch theme mode */}
      <IconButton sx={{ color: 'inherit' }} onClick={toggleDarkMode}>
        {/* Display sun icon for light mode and moon icon for dark mode */}
        {isDark ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  );
}
