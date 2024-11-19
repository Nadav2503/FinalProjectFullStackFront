import React from 'react';
import Logo from './Logo';
import CompanyName from './CompanyName';

export default function LeftHeader() {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <CompanyName />
            <Logo />
        </div>
    );
}
