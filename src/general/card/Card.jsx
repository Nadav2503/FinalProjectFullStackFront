import React from 'react';
import { Box } from '@mui/material';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardActionBar from './CardActionBar';

const Card = ({ headerProps, bodyProps, actionsProps }) => {
    return (
        <Box
            className="card"
            sx={{
                display: 'flex',
                flexDirection: 'column', // Stack child components vertically
                borderRadius: 2, // Rounded corners for the card
                boxShadow: 3, // Adding shadow for depth
                overflow: 'hidden', // Ensures the content doesn't spill out
                width: '100%',
                maxWidth: 400, // Restrict card width on larger screens
                margin: 'auto', // Centers the card horizontally
                backgroundColor: 'background.paper', // Uses the theme's background color
            }}
        >
            <CardHeader {...headerProps} />
            <CardBody {...bodyProps} />
            <CardActionBar {...actionsProps} />
        </Box>
    );
};

export default Card;
