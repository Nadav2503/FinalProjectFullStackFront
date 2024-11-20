import React from 'react';
import { Button } from '@mui/material';

const CustomButton = () => {
    return (
        <Button
            variant={variant}
            color={color}
            startIcon={startIcon}
            endIcon={endIcon}
            onClick={onClick}

            {...props}
        >
            {text}
        </Button>
    );
};

export default CustomButton;
