import React from 'react';
import Logo from './Logo';
import CompanyName from './CompanyName';

export default function LeftHeader() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
            <Logo />
            <div style={{ flexShrink: 1, minWidth: 0, overflow: 'hidden' }}>
                <CompanyName />
            </div>
        </div>
    );
}
