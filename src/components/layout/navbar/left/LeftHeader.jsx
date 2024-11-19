import React from 'react';
import Logo from './Logo';
import CompanyName from './CompanyName';

export default function LeftHeader() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
            <Logo />
            <div style={{ minWidth: 0, overflow: 'hidden' }}>
                <CompanyName />
            </div>
        </div>
    );
}
