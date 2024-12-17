import React from 'react'
import PageHeader from '../general/PageHeader'
import { Box, Container, Grid, Typography } from '@mui/material'

export default function MapPage() {
    const zones = [
        { name: "Africa", location: "Africa", color: "#FFCC00" },
        { name: "Asia", location: "Asia", color: "#FF7043" },
        { name: "Europe", location: "Europe", color: "#4DB6AC" },
        { name: "North America", location: "North America", color: "#29B6F6" },
        { name: "South America", location: "South America", color: "#81C784" },
        { name: "Australia", location: "Australia", color: "#FFD54F" },
        { name: "Antarctica", location: "Antarctica", color: "#B3E5FC" },
    ];
    const handleZoneClick = (location) => {
        navigate(`${ROUTES.EXHIBITS}?location=${location}`);
    };

    return (
        <Container>
            <PageHeader title="Zoo Map">
            </PageHeader>
            <Grid container spacing={3} justifyContent="center">
                {zones.map((zone) => (
                    <Grid item xs={12} sm={6} md={4} key={zone.location}>
                        <Box
                            sx={{
                                backgroundColor: zone.color,
                                borderRadius: 2,
                                height: 150,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                boxShadow: 3,
                                "&:hover": { boxShadow: 6, opacity: 0.9 },
                            }}

                        >
                            <Typography
                                variant="h5"
                                sx={{ color: "white", fontWeight: "bold" }}
                            >
                                {zone.name}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
