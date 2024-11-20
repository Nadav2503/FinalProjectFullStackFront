import React from 'react';
import { IconButton, Box, TextField, InputAdornment, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function Search({ isOpen, toggleSearch }) {
    const theme = useTheme(); // Access theme for styling.

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            {!isOpen && (
                // Icon to open the search bar
                <IconButton onClick={toggleSearch} color="inherit">
                    <SearchIcon />
                </IconButton>
            )}

            {isOpen && (
                // Search input field
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search..."
                    sx={{
                        flex: 1,
                        maxWidth: '100%',
                        marginLeft: '8px',
                        borderRadius: 2,
                        backgroundColor: theme.palette.background.paper, // Theme-based background.
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: theme.palette.divider,
                            },
                            '&:hover fieldset': {
                                borderColor: theme.palette.primary.main,
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: theme.palette.primary.main,
                            },
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {/* Close button for the search bar */}
                                <IconButton onClick={toggleSearch}>
                                    <CloseIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    autoFocus // Automatically focus the input when open.
                />
            )}
        </Box>
    );
}
