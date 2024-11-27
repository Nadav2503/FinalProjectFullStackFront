import { useState } from "react";
import { deleteAnimal } from "../../services/AnimalServiceApi";


const useDeleteAnimal = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const remove = async (id) => {
        setLoading(true);
        setError(null);

        try {
            const data = await deleteAnimal(id);
            return data;
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { remove, loading, error };
};

export default useDeleteAnimal;
