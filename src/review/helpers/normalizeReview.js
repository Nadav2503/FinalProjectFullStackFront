const normalizeReview = (review) => {
    return {
        rating: Number(review.rating), // Ensure rating is a number
        comment: review.comment?.trim() || null, // Trim the comment and set null if empty
    };
};

export default normalizeReview;
