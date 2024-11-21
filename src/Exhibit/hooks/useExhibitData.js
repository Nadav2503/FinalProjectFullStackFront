import { useCallback, useState } from 'react';
import { useSnack } from '../../providers/SnackbarProvider';


export default function useExhibitData() {
    const [exhibits, setExhibits] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();

    const fetchExhibits = useCallback(async () => {

    }, [setSnack]);

    return { fetchExhibits };
}
