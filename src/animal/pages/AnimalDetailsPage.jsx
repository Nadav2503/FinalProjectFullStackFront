import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import useGetAnimalById from "../hooks/useGetAnimalById";


export default function AnimalDetailPage() {
    const { animalId } = useParams(); // Get animal ID from the URL
    const { animal, isLoading, error, fetchAnimalById } = useGetAnimalById(); // Hook to fetch animal data

    useEffect(() => {
        fetchAnimalById(animalId); // Pass animalId here
    }, [animalId, fetchAnimalById]);

    return (
        <Container>

        </Container>
    );
}
