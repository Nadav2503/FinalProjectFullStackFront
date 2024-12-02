import { useCallback, useState } from 'react';
import { useSnack } from '../../providers/SnackbarProvider';

export default function useGetAllVisitors() {
    const [visitors, setVisitors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();



    return { visitors, isLoading, error, };
}
