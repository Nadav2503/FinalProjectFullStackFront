import { useState } from "react";
import { updateAnimal } from "../../services/AnimalServiceApi";

const useUpdateAnimal = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const update = async (id, animal) => {
        setLoading(true);
        setError(null);

        try {
            const data = await updateAnimal(id, animal);
            return data;
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { update, loading, error };
};

export default useUpdateAnimal;
