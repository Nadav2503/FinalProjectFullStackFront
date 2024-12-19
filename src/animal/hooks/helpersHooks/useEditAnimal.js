import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGetAnimalById from "../hooks/useGetAnimalById";
import useUpdateAnimal from "../hooks/useUpdateAnimal";
import animalSchema from "../model/animalSchema";
import mapAnimalToModel from "../helpers/mapAnimalToModel";
import useForm from "../../form/useForm";

export default function useEditAnimal() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { animal, fetchAnimalById } = useGetAnimalById();
    const { handleUpdateAnimal } = useUpdateAnimal();
    const { data, errors, handleChange, validateForm, onSubmit, setData } = useForm(
        animal || mapAnimalToModel(animal),
        animalSchema,
        useCallback(
            async (formData) => {
                try {
                    await handleUpdateAnimal(id, formData);
                    navigate("/exhibits");
                } catch (error) {
                    console.error("Failed to update animal:", error);
                }
            },
            [handleUpdateAnimal, id, navigate]
        )
    );

    useEffect(() => {
        fetchAnimalById(id);
    }, [id, fetchAnimalById]);

    useEffect(() => {
        if (animal) {
            setData(mapAnimalToModel(animal));
        }
    }, [animal, setData]);

    return { data, errors, handleChange, validateForm, onSubmit };
}
