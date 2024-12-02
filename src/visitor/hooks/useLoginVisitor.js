import { useState } from 'react';
import { useSnack } from '../../providers/SnackbarProvider';
import { useCurrentVisitor } from '../../providers/VisitorProvider';

export default function useLoginVisitor() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();
    const { setVisitor, setToken } = useCurrentVisitor();



    return {
        isLoading,
        error,

    };
}
