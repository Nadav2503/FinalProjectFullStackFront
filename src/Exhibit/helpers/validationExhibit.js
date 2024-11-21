export const validateExhibit = (exhibit) => {
    const errors = {};

    if (!exhibit.name || exhibit.name.trim().length < 3 || exhibit.name.trim().length > 256) {
        errors.name = 'Name must be between 3 and 256 characters.';
    }


    return errors;
};
