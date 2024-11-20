import React from 'react';
import { IconButton, Box, TextField, InputAdornment, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // Search icon
import CloseIcon from '@mui/icons-material/Close'; // Close icon to close the search bar

export default function Search({ isOpen, toggleSearch }) {
    const theme = useTheme(); // Access current theme for styling.

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            {/* Conditionally render the search icon when the search bar is closed */}
            {!isOpen && (
                <IconButton onClick={toggleSearch} color="inherit">
                    <SearchIcon />
                </IconButton>
            )}

            {/* Conditionally render the search input field when the search bar is open */}
            {isOpen && (
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search..."
                    sx={{
                        flex: 1,
                        maxWidth: '100%',
                        marginLeft: '8px',
                        borderRadius: 2,
                        backgroundColor: theme.palette.background.paper, // Set background color from theme
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: theme.palette.divider, // Set border color from theme
                            },
                            '&:hover fieldset': {
                                borderColor: theme.palette.primary.main, // Change border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: theme.palette.primary.main, // Change border color when focused
                            },
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {/* Icon button to close the search bar */}
                                <IconButton onClick={toggleSearch}>
                                    <CloseIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    autoFocus // Automatically focus the input field when opened
                />
            )}
        </Box>
    );
}
