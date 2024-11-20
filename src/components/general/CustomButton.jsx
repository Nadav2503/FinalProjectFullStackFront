import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ text, onClick, variant = "contained", color = "primary", startIcon, endIcon, ...props }) => {
    return (
        <Button
            variant={variant}
            color={color}
            startIcon={startIcon}
            endIcon={endIcon}
            onClick={onClick}
            sx={{
                padding: '12px 24px',
                fontSize: '1rem',
                borderRadius: 3,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.4)',
                },
                ...props.sx, // Allow for additional styling passed as props
            }}
            {...props}
        >
            {text}
        </Button>
    );
};

export default CustomButton;
