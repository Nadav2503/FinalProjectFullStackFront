import { useState, useEffect } from "react";
import { getAnimalById } from "../../services/AnimalServiceApi";

const useGetAnimalById = (id) => {
    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        const fetchAnimal = async () => {
            try {
                const data = await getAnimalById(id);
                setAnimal(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAnimal();
    }, [id]);

    return { animal, loading, error };
};

export default useGetAnimalById;
