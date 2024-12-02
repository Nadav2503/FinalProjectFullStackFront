import React, { createContext, useState, useEffect } from 'react';
import { getToken, getUser } from '../services/LocalStorageService';

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
        <></>
    );
}
