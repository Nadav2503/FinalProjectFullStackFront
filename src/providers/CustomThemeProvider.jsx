import React, { createContext, useState, useCallback, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Context for managing and accessing theme data.
const ThemeContext = createContext();

// CustomThemeProvider: Manages the dark and light themes for the application.
export default function CustomThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false); // State to track the theme mode.

    // Toggles between dark and light modes.
    const toggleDarkMode = useCallback(() => {
        setIsDark((prevMode) => !prevMode);
    }, []);

    // Creates a custom Material-UI theme based on the current mode.
    const theme = createTheme({
        palette: {
            mode: isDark ? 'dark' : 'light', // Sets mode dynamically.
            ...(isDark
                ? {
                    primary: { main: '#90caf9' }, // Colors for dark mode.
                    background: {
                        default: '#121212',
                        paper: '#424242',
                    },
                    text: {
                        primary: '#ffffff',
                        secondary: '#b0bec5',
                    },
                }
                : {
                    primary: { main: '#1976d2' }, // Colors for light mode.
                    background: {
                        default: '#f5f5f5',
                        paper: '#ffffff',
                    },
                    text: {
                        primary: '#000000',
                        secondary: '#555555',
                    },
                }),
        },
    });

    return (
        <ThemeProvider theme={theme}>
            {/* Provides theme context values to all children */}
            <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}

// Custom hook to access theme context.
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within CustomThemeProvider');
    }
    return context;
};
