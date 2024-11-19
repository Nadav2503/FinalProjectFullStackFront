// MiddleHeader.jsx
import React from 'react';
import Navbar from './Navbar';
import Search from './Search';

export default function MiddleHeader() {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Navbar />
            <Search />
        </div>
    );
}
