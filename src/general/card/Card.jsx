import React from 'react';
import { Box } from '@mui/material';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardActionBar from './CardActionBar';

const Card = ({ headerProps, bodyProps, actionsProps }) => {
    return (
        <Box
        >
            <CardHeader {...headerProps} />
            <CardBody {...bodyProps} />
            <CardActionBar {...actionsProps} />
        </Box>
    );
};

export default Card;
