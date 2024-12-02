import { useCallback } from 'react';
import { removeToken } from '../../services/LocalStorageService';

const useLogout = () => {

    const handleLogout = useCallback(() => {
        removeToken();  // Remove the token from localStorage
    }, []);

    return { handleLogout };
};

export default useLogout;
