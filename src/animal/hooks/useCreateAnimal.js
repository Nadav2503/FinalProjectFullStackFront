import { useState } from "react";
import { createAnimal } from "../../services/AnimalServiceApi";

const useCreateAnimal = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const create = async (animal) => {
        setLoading(true);
        setError(null);

        try {
            const data = await createAnimal(animal);
            return data;
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { create, loading, error };
};

export default useCreateAnimal;
