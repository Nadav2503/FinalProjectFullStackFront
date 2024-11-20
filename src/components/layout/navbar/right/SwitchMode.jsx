import React from 'react';
import { IconButton, Box, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme as useCustomTheme } from '../../../../providers/CustomThemeProvider'; // Rename here for clarity

// Toggles between dark and light modes.
export default function SwitchMode() {
  const { isDark, toggleDarkMode } = useCustomTheme(); // Get theme state and toggle function from custom theme provider
  const theme = useTheme(); // Material UI's useTheme hook for theme access

  // Glow effect for dark mode with the warm orange color
  const iconColor = isDark ? '#F09319' : theme.palette.text.primary; // Orange for dark mode, default text color for light mode
  const boxShadow = isDark
    ? 'inset -1px 0px 13px 5px rgba(240, 147, 25, 0.5)' // Soft glowing orange shadow for dark mode
    : '0 4px 8px rgba(0, 0, 0, 0.2)'; // Subtle shadow for light mode

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: 2 }}>
      {/* Button to switch theme mode */}
      <IconButton
        sx={{
          color: iconColor,
          backgroundColor: isDark ? 'transparent' : theme.palette.background.default, // Transparent for dark mode, background color for light mode
          borderRadius: '50%', // Keep the button circular
          padding: '8px',
          boxShadow: boxShadow,
          transition: 'all 0.3s ease', // Smooth transition for all changes
          '&:hover': {
            backgroundColor: isDark ? 'transparent' : theme.palette.background.paper, // Slight background color change on hover for light mode
            boxShadow: isDark
              ? '0 4px 12px rgba(240, 147, 25, 0.8)' // Stronger glow effect on hover for dark mode
              : '0 6px 12px rgba(0, 0, 0, 0.3)', // Slightly stronger shadow for light mode hover
            transform: 'scale(1.05)', // Slight grow effect to simulate button press
          },
          '&:active': {
            transform: 'scale(1)', // Button presses back to normal size on click
          },
          '&:focus': {
            outline: 'none', // Remove focus outline to keep the button clean
          },
        }}
        onClick={toggleDarkMode}
      >
        {/* Display sun icon for light mode and moon icon for dark mode */}
        {isDark ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  );
}
