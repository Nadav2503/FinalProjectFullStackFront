import React from 'react';
import { TextField } from '@mui/material';

export default function Search() {
    return (
        <TextField
            label="Search"
            variant="outlined"
            fullWidth
            sx={{ maxWidth: 400 }}
        />
    );
}
