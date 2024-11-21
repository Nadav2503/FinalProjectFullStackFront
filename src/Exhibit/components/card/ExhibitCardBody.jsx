import React from 'react';

export default function ExhibitCardBody({ description, capacity, location, status }) {
    const content = (
        <>
            <p>Description: {description}</p>
            <p>Capacity: {capacity}</p>
            <p>Location: {location}</p>
            <p>Status: {status}</p>
        </>
    );

    return (
        <CardBody content={content} />
    );
}
