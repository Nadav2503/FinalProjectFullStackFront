import { useCallback, useState } from 'react';

export default function useUpdateExhibit() {


    const handleUpdateExhibit = useCallback(async (id, exhibitFromClient) => {

    }, []);

    return { isLoading, error, handleUpdateExhibit };
}
