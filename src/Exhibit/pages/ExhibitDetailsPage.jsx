import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Divider, Container } from "@mui/material";
import { Pets as PetsIcon, LocationOn as LocationIcon, CheckCircle as StatusIcon } from "@mui/icons-material";
import PageHeader from "../../general/PageHeader";
import Loader from "../../general/Loader";
import Error from "../../general/Error";
import useExhibitById from "../hooks/useExhibitDataById";

export default function ExhibitDetailPage() {
    const { exhibitId } = useParams(); // Get exhibit ID from the URL
    const { exhibit, error, isLoading, fetchExhibitById } = useExhibitById();

    useEffect(() => {
        fetchExhibitById(exhibitId); // Fetch exhibit details on component mount
    }, [exhibitId, fetchExhibitById]);

    if (isLoading) return <Loader />;
    if (error) {
        const errorMessage = typeof error === "string" ? error : error.message || "An unknown error occurred.";
        return <Error errorMessage={errorMessage} />;
    }
    if (!exhibit) return <Error errorMessage="Exhibit not found." />;

    const currentCapacity = exhibit.animals?.length || 0; // Dynamic capacity based on animals array

    return (
        <Container>
            {/* Page Header */}
            <PageHeader
                title={exhibit.name}
                subtitle={exhibit.description}
            />

            {/* Exhibit Details Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    mt: 4,
                    mb: 4,
                }}
            >
                {/* Current Capacity with Pet Icon */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                    <PetsIcon sx={{ marginRight: 1 }} />
                    <Typography variant="h6">
                        Current Animals: {currentCapacity}
                    </Typography>
                </Box>

                {/* Max Capacity */}
                <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                    Exhibit Capacity: {exhibit.capacity}
                </Typography>

                {/* Location with Icon */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                    <LocationIcon sx={{ marginRight: 1 }} />
                    <Typography variant="h6">{exhibit.location}</Typography>
                </Box>

                {/* Status with Icon and updated colors */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                    <StatusIcon
                        sx={{
                            marginRight: 1,
                            color:
                                exhibit.status === "open"
                                    ? "green"
                                    : exhibit.status === "closed"
                                        ? "red"
                                        : "#F09319", // Orange for under maintenance
                        }}
                    />
                    <Typography
                        variant="h6"
                        color={
                            exhibit.status === "open"
                                ? "green"
                                : exhibit.status === "closed"
                                    ? "red"
                                    : "#F09319" // Orange for under maintenance
                        }
                    >
                        {exhibit.status}
                    </Typography>
                </Box>

                {/* Divider */}
                <Divider sx={{ my: 2, width: "100%", maxWidth: "600px" }} />
            </Box>

            {/* Placeholder for Animals */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: 2,
                }}
            >
                <Typography variant="body1" color="text.secondary">
                    Animal cards will appear here once implemented.
                </Typography>
            </Box>
        </Container>
    );
}
