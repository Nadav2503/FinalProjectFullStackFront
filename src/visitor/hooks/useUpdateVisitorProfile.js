import { useState } from 'react';

import { useSnack } from '../../providers/SnackbarProvider';


export default function useUpdateVisitorProfile() {
    const [visitor, setVisitor] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();



    return { visitor, isLoading, error, };
}
