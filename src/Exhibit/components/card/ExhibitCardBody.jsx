import React from 'react';

export default function ExhibitCardBody({ description, capacity, location, status }) {
    const content = (
        <>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Capacity:</strong> {capacity}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Status:</strong> {status}</p>
        </>
    );

    return (
        <CardBody content={content} />
    );
}
