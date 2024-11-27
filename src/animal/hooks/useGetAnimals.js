import { useState } from "react";

const useGetAnimals = () => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    return { loading, error };
};
export default useGetAnimals;