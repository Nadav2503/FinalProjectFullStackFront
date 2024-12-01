import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Box, Divider } from "@mui/material";

import Loader from "../../general/Loader";
import Error from "../../general/Error";
import useGetAnimalById from "../hooks/useGetAnimalById";
import PageHeader from "../../general/PageHeader";


export default function AnimalDetailPage() {
    const { animalId } = useParams(); // Get animal ID from the URL
    const { animal, isLoading, error, fetchAnimalById } = useGetAnimalById(); // Hook to fetch animal data
    const navigate = useNavigate(); // For navigation

    useEffect(() => {
        fetchAnimalById(animalId); // Pass animalId here
    }, [animalId, fetchAnimalById]);

    if (isLoading) return <Loader />;
    if (error) {
        const errorMessage = typeof error === "string" ? error : error.message || "An unknown error occurred.";
        return <Error errorMessage={errorMessage} />;
    }
    if (!animal) return <Error errorMessage="Animal not found." />;

    return (
        <Container>
            {/* Page Header */}
            <PageHeader sx={{ textAlign: "center", mb: 4 }}
                title={animal.name}
                subtitle={animal.description}>
            </PageHeader>
            {/* Animal Image */}
            <Box sx={{ textAlign: "center", mt: 4 }}>
                <img
                    src={animal.image.url}
                    alt={`${animal.name}`}
                    style={{ maxWidth: "100%", height: "auto", borderRadius: 8 }}
                />
            </Box>
            <Divider sx={{ mt: 2, mb: 4 }} />
            {/* Animal Details */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4,
                }}
            >
                {/* First Column */}
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box>
                        <Typography variant="body1" color="text.secondary">
                            Name:
                        </Typography>
                        <Typography variant="h6">{animal.name}</Typography>
                    </Box>

                    <Box>
                        <Typography variant="body1" color="text.secondary">
                            Age:
                        </Typography>
                        <Typography variant="h6">{animal.age} years</Typography>
                    </Box>

                    <Box>
                        <Typography variant="body1" color="text.secondary">
                            Gender:
                        </Typography>
                        <Typography variant="h6">{animal.gender}</Typography>
                    </Box>
                </Box>

                {/* Vertical Divider */}
                <Divider
                    orientation="vertical"
                    flexItem // Ensures the divider stretches to match its sibling elements
                    sx={{
                        borderRightWidth: 2, // Optional: Makes the divider slightly thicker
                        height: "auto", // Fills the vertical space
                    }}
                />

                {/* Second Column */}
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box>
                        <Typography variant="body1" color="text.secondary">
                            Diet:
                        </Typography>
                        <Typography variant="h6">{animal.diet}</Typography>
                    </Box>


                </Box>
            </Box>
        </Container >
    );
}
