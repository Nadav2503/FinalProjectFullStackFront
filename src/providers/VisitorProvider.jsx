import React, { createContext, useContext, useState, useEffect } from 'react';
import { getToken, getUser } from '../services/LocalStorageService';

const VisitorContext = createContext();

export default function VisitorProvider({ children }) {
    const [visitor, setVisitor] = useState(null);
    const [token, setToken] = useState(getToken());

    useEffect(() => {
        if (token) {
            const userFromLocalStorage = getUser();
            setVisitor(userFromLocalStorage); // Set the user from the token
        } else {
            setVisitor(null); // If no token, set visitor to null
        }
    }, [token]);

    return (
        <VisitorContext.Provider value={{ visitor, setVisitor, token, setToken }}>
            {children}
        </VisitorContext.Provider>
    );
}

// Custom hook to use visitor context
export const useCurrentVisitor = () => {
    const context = useContext(VisitorContext);
    if (!context) {
        throw new Error("useCurrentVisitor must be used within VisitorProvider");
    }
    return context;
};
