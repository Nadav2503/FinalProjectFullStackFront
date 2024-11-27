import { useState } from "react";
import { updateEndangeredStatus } from "../../services/AnimalServiceApi";

const useUpdateEndangeredStatus = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateStatus = async (id, status) => {
        setLoading(true);
        setError(null);

        try {
            const data = await updateEndangeredStatus(id, status);
            return data;
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { updateStatus, loading, error };
};

export default useUpdateEndangeredStatus;
