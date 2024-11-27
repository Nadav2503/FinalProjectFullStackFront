import { useState } from "react";
import { updateAnimal } from "../../services/AnimalServiceApi";

const useUpdateAnimal = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    return { loading, error };
};

export default useUpdateAnimal;
