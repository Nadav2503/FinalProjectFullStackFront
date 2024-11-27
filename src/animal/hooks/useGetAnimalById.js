import { useState, useCallback } from "react";
import { getAnimalById } from "../../services/AnimalServiceApi";
import { useSnack } from "../../providers/SnackbarProvider";

const useGetAnimalById = (id) => {
    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const fetchAnimalById = useCallback(async () => {
        try {
            const data = await getAnimalById(id);
            setAnimal(data);
            setSnack('success', `Animal ${id} fetched successfully!`);
        } catch (err) {
            setError(err.message);
            setSnack('error', `Failed to fetch animal ${id}`);
        } finally {
            setLoading(false);
        }
    }, []);


    return { animal, loading, error, fetchAnimalById };
};

export default useGetAnimalById;
