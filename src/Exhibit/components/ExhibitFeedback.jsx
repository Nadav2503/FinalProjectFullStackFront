import React from 'react';
import Loader from '../../general/Loader';
import Error from '../../general/Error';
import Exhibits from './Exhibits';

export default function ExhibitFeedback({
    isLoading,
    exhibits,
    error,
    handleDelete,
    handleEditExhibit,
}) {
    if (isLoading) return <Loader />;
    if (error) return <Error errorMessage={error} />;
    if (!exhibits || exhibits.length === 0) return <Error errorMessage="Oops... it seems there are no exhibits to display" />;
    if (exhibits)
        return (
            <Exhibits
                exhibits={exhibits}
                handleDelete={handleDelete}
                handleEditExhibit={handleEditExhibit}
            />
        );
    return null;
}
