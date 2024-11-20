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
                    primary: { main: '#3D5300' }, // Deep olive green for dark mode
                    background: {
                        default: '#1F4529', // Dark green background
                        paper: '#47663B', // Dark green paper background
                    },
                    text: {
                        primary: '#E8ECD7', // Light beige text for readability
                        secondary: '#B0BEC5', // Softer secondary text
                    },
                }
                : {
                    primary: { main: '#FFE31A' }, // Bright yellow for light mode
                    background: {
                        default: '#C2FFC7', // Pale green background
                        paper: '#EED3B1', // Soft yellowish paper
                    },
                    text: {
                        primary: '#62825D', // Muted green text for contrast
                        secondary: '#616161', // Lighter text for secondary elements
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
