import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import Loader from "../../general/Loader";
import Error from "../../general/Error";
import useGetAnimalById from "../hooks/useGetAnimalById";


export default function AnimalDetailPage() {
    const { animalId } = useParams(); // Get animal ID from the URL
    const { animal, isLoading, error, fetchAnimalById } = useGetAnimalById(); // Hook to fetch animal data


    useEffect(() => {
        console.log("Fetching animal details for ID:", animalId); // Debugging log
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

        </Container>
    );
}
