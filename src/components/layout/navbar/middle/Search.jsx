import React from 'react';
import { TextField, Box } from '@mui/material';

export default function Search() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                sx={{
                    maxWidth: 500,  // Make search bar a bit wider
                    borderRadius: 2,  // Rounded corners
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#ccc', // Lighter border color
                        },
                        '&:hover fieldset': {
                            borderColor: '#3f51b5', // Highlight border color on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#3f51b5', // Focused state border color
                        },
                    },
                }}
            />
        </Box>
    );
}
