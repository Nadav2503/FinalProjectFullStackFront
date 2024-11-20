// Importing React, necessary hooks, and MUI utilities
import React, { createContext, useState, useCallback, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Context for managing and accessing theme data.
const ThemeContext = createContext();

// CustomThemeProvider: Manages the dark and light themes for the application.
export default function CustomThemeProvider({ children }) {
    // State to track the theme mode (dark or light).
    const [isDark, setIsDark] = useState(false);

    // Toggles between dark and light modes when called.
    const toggleDarkMode = useCallback(() => {
        setIsDark((prevMode) => !prevMode);
    }, []);

    // Creates a custom Material-UI theme based on the current mode.
    const theme = createTheme({
        palette: {
            mode: isDark ? 'dark' : 'light', // Dynamically sets the mode to either 'dark' or 'light'.
            ...(isDark
                // Theme settings for dark mode
                ? {
                    primary: { main: '#3D5300' }, // Deep olive green for primary color
                    background: {
                        default: '#1F4529', // Dark green background
                        paper: '#47663B', // Dark green paper background
                    },
                    text: {
                        primary: '#E8ECD7', // Light beige text for readability
                        secondary: '#B0BEC5', // Softer secondary text
                    },
                }
                // Theme settings for light mode
                : {
                    primary: { main: '#FFE31A' }, // Bright yellow for primary color
                    background: {
                        default: '#C2FFC7', // Pale green background
                        paper: '#EED3B1', // Soft yellowish paper
                    },
                    text: {
                        primary: '#62825D', // Muted green text for primary text
                        secondary: '#616161', // Lighter text for secondary elements
                    },
                }),
        },
        // Adjustments for responsiveness: We will adjust the typography and spacing dynamically based on screen size.
        typography: {
            h5: {
                fontSize: '2rem',
                '@media (max-width:600px)': {
                    fontSize: '1.5rem', // Smaller font size for mobile screens
                },
            },
        },
        spacing: 8, // Default spacing unit for the theme, can be adjusted based on screen size
    });

    return (
        // Wrapping the app in ThemeProvider to apply the custom theme
        <ThemeProvider theme={theme}>
            {/* Provides theme context values to all children for accessing theme mode and toggle function */}
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
