import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Box, Divider, Switch, FormControlLabel } from "@mui/material";
import Loader from "../../general/Loader";
import Error from "../../general/Error";
import useGetAnimalById from "../hooks/useGetAnimalById";
import PageHeader from "../../general/PageHeader";
import CustomButton from "../../general/CustomButton";
import { ArrowBack } from "@mui/icons-material";
import useUpdateEndangeredStatus from "../hooks/useUpdateEndangeredStatus";

export default function AnimalDetailPage() {
    const { animalId } = useParams(); // Get animal ID from the URL
    const { animal, isLoading, error, fetchAnimalById } = useGetAnimalById(); // Hook to fetch animal data
    const { updateStatus, loading } = useUpdateEndangeredStatus(); // Use update status hook

    const [endangeredStatus, setEndangeredStatus] = useState(animal?.isEndangered || false);

    useEffect(() => {
        fetchAnimalById(animalId); // Pass animalId here
    }, [animalId, fetchAnimalById]);

    useEffect(() => {
        setEndangeredStatus(animal?.isEndangered || false); // Update state when animal data changes
    }, [animal]);

    const handleEndangeredToggle = async (event) => {
        const newStatus = event.target.checked;
        setEndangeredStatus(newStatus); // Update the local state first

        try {
            await updateStatus(animalId, newStatus); // Call the API to update the status
        } catch (err) {
            // Handle error here if needed (e.g., revert to the previous status)
            setEndangeredStatus(!newStatus); // Revert if update fails
        }
    };

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
                            Type:
                        </Typography>
                        <Typography variant="h6">{animal.type}</Typography>
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
                    flexItem
                    sx={{
                        borderRightWidth: 2,
                        height: "auto",
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

                    {/* Endangered Status with Toggle */}
                    <Box>
                        <Typography variant="body1" color="text.secondary">
                            Endangered Status:
                        </Typography>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={endangeredStatus}
                                    onChange={handleEndangeredToggle}
                                    disabled={loading}
                                />
                            }
                            label={endangeredStatus ? "Yes" : "No"}
                        />
                    </Box>

                    <Box>
                        <Typography variant="body1" color="text.secondary">
                            Health Status:
                        </Typography>
                        <Typography variant="h6">{animal.healthStatus}</Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
