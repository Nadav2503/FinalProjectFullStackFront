import { useState } from "react";
import { createAnimal } from "../services/animalService";

const useCreateAnimal = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    return { create, loading, error };
};

export default useCreateAnimal;