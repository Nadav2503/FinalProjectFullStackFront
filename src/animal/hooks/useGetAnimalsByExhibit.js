import { useState, useEffect } from "react";

const useGetAnimalsByExhibit = (exhibitId) => {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    return { loading, error };
};

export default useGetAnimalsByExhibit;