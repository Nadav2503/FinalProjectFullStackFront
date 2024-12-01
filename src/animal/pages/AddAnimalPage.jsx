import React, { useCallback, useEffect, useState } from "react";
import AnimalAddForm from "../components/AnimaAddForm";
import initializeAnimal from "../helpers/initializeAnimal";
import { useNavigate, useLocation } from "react-router-dom";
import useForm from "../../form/useForm";
import useCreateAnimal from "../hooks/useCreateAnimal";
import animalSchema from "../model/animalSchema";
import { Box, Container } from "@mui/material";
import ROUTES from "../../routers/routerModel";
import useUpdateAnimalsInExhibit from "../../Exhibit/hooks/useUpdateAnimalsInExhibit";

export default function AddAnimalPage() {
    const location = useLocation();
    const [exhibitId, setExhibitId] = useState(null);
    const { handleCreateAnimal } = useCreateAnimal();
    const { handleUpdateAnimals } = useUpdateAnimalsInExhibit(); // Get the hook to update exhibit animals
    const navigate = useNavigate();

    // Extract exhibitId from location state
    useEffect(() => {
        if (location.state && location.state.exhibitId) {
            setExhibitId(location.state.exhibitId);
            console.log("Exhibit ID from location state:", location.state.exhibitId);
        } else {
            console.log("No exhibitId found in location state.");
        }
    }, [location]);

    const handleSubmit = useCallback(
        async (formData) => {
            try {
                await handleCreateAnimal(formData); // Create the animal
                if (exhibitId) {
                    await handleUpdateAnimals(exhibitId, animal._id); // Update the animals in the exhibit
                }
                navigate(ROUTES.animalList); // Navigate to the animal list page
            } catch (error) {
                console.error("Error in handleSubmit:", error);
            }
        },
        [exhibitId, handleCreateAnimal, handleUpdateAnimals, navigate]
    );

    const { data, errors, handleChange, validateForm, onSubmit } = useForm(
        initializeAnimal,
        animalSchema,
        handleSubmit
    );

    return (
        <Container>
            <Box>
                <AnimalAddForm
                    title="Add New Animal"
                    submitLabel="Create Animal"
                    onSubmit={onSubmit}
                    validateForm={validateForm}
                    errors={errors}
                    data={data}
                    onInputChange={handleChange}
                />
            </Box>
        </Container>
    );
}
