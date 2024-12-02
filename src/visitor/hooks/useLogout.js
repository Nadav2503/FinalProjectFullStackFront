import { useCallback, useState } from 'react';
import { removeToken } from '../../services/LocalStorageService';
import { useSnack } from '../../providers/SnackbarProvider';

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const setSnack = useSnack();
    const handleLogout = useCallback(() => {
        removeToken();  // Remove the token from localStorage
    }, []);

    return { handleLogout };
};

export default useLogout;
