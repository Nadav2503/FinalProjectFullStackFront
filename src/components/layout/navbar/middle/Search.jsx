import React from 'react';
import { IconButton, Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function Search({ isOpen, toggleSearch }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            {/* Always Visible Search Icon */}
            {!isOpen && (
                <IconButton onClick={toggleSearch} color="inherit">
                    <SearchIcon />
                </IconButton>
            )}

            {/* Search Bar with Close Button */}
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
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#ccc',
                            },
                            '&:hover fieldset': {
                                borderColor: '#3f51b5',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#3f51b5',
                            },
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={toggleSearch}>
                                    <CloseIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    autoFocus
                />
            )}
        </Box>
    );
}
