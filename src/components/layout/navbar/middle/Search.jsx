import React, { useState } from 'react';
import { IconButton, Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



export default function Search() {
    const [showSearch, setShowSearch] = useState(false);

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {/* Search Icon */}
            <IconButton onClick={toggleSearch} color="inherit">
                <SearchIcon />
            </IconButton>
            <TextField
                variant="outlined"
                size="small"
                placeholder="Search"
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
