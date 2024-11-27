import { useState, useEffect } from "react";

const useGetAnimalById = (id) => {
    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    return { loading, error };
};

export default useGetAnimalById;