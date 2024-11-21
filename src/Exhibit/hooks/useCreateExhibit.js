import { useCallback, useState } from 'react';


export default function useCreateExhibit() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCreateExhibit = useCallback(async (exhibitFromClient) => {

    }, []);

    return { isLoading, error, handleCreateExhibit };
}
