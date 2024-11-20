import React from 'react';
import Logo from './Logo';
import CompanyName from './CompanyName';

export default function LeftHeader() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
            {/* Displays the logo on the left */}
            <Logo />
            {/* Contains the company name with overflow handling */}
            <div style={{ minWidth: 0, overflow: 'hidden' }}>
                <CompanyName />
            </div>
        </div>
    );
}
