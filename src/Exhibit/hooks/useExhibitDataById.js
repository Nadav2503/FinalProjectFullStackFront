import { useCallback, useState } from 'react';


export default function useExhibitById() {
    const [exhibit, setExhibit] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchExhibitById = useCallback(async (id) => {

    }, []);

    return { exhibit, error, isLoading, fetchExhibitById };
}
