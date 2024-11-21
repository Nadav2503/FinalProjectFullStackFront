export const validateExhibit = (exhibit) => {
    const errors = {};

    if (!exhibit.name || exhibit.name.trim().length < 3 || exhibit.name.trim().length > 256) {
        errors.name = 'Name must be between 3 and 256 characters.';
    }

    if (!exhibit.description || exhibit.description.trim().length < 10 || exhibit.description.trim().length > 1024) {
        errors.description = 'Description must be between 10 and 1024 characters.';
    }



    return errors;
};
