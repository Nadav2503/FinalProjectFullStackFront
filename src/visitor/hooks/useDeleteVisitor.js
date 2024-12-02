import { useState } from 'react';

import { useSnack } from '../../providers/SnackbarProvider';


const useDeleteVisitor = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();



    return { loading, error };
};

export default useDeleteVisitor;
