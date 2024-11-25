import React from "react";

import { Box, Typography, Divider, Container } from "@mui/material";

import PageHeader from "../../general/PageHeader";


export default function ExhibitDetailPage() {


    return (
        <Container>
            {/* Page Header */}
            <PageHeader
                title={exhibit.name}
                subtitle={exhibit.description}
            />

            {/* Exhibit Details Section */}
            <Box

            >
                {/* Current Capacity with Pet Icon */}
                <Box>

                    <Typography variant="h6">
                        Current Animals: {currentCapacity}
                    </Typography>
                </Box>

                {/* Max Capacity */}
                <Typography >
                    Exhibit Capacity: {exhibit.capacity}
                </Typography>

                {/* Location with Icon */}
                <Box >

                    <Typography variant="h6">{exhibit.location}</Typography>
                </Box>

                {/* Status with Icon and updated colors */}
                <Box >



                    <Typography

                    >
                        {exhibit.status}
                    </Typography>
                </Box>

                {/* Divider */}
                <Divider />
            </Box>

            {/* Placeholder for Animals */}
            <Box

            >
                <Typography >
                    Animal cards will appear here once implemented.
                </Typography>
            </Box>
        </Container>
    );
}
