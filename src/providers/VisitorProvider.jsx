import React, { createContext, useState } from 'react';
import { getToken } from '../services/LocalStorageService';


const VisitorContext = createContext();

export default function VisitorProvider({ children }) {
    const [visitor, setVisitor] = useState(null);
    const [token, setToken] = useState(getToken());


    return (
        <></>
    );
}
